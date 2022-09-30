import appConfig from '../configs/appConfig.json';
import AWS from 'aws-sdk';
import { IAMClient } from "@aws-sdk/client-iam";
import {ListPoliciesCommand} from "@aws-sdk/client-iam";

interface LoginsInterface {
  [loginUrl: string] : any;
}

// Make AWS request using Cognito
export const makeCognitoRequest = (id_token:string) => {
  const AWSConfig = appConfig.AWS.config;
  const aws_region = AWSConfig.region;
  const logins: LoginsInterface = {};
  logins[AWSConfig.loginUrl] = id_token;

  // *** REPLACE pool_id and table_name WITH YOUR OWN VALUES ***
  var pool_id = AWSConfig.poolId;

  // Parameters required for CognitoIdentityCredentials
  var params = {
    IdentityPoolId: pool_id,
    Logins: logins
  };

  // Amazon Cognito region
  AWS.config.region = aws_region;

  AWS.config.credentials = new AWS.CognitoIdentityCredentials(params);
  return new Promise((resolve, reject) => {
    AWS.config.getCredentials((err: any, credential:any) => {
      if (err) {  // an error occurred
        localStorage.clear();
        if(err.statusCode === 400 || credential.expired) {
          window.location.href = '/login';
        }
        reject(err);
      } else {      // successful response
        // DynamoDB client will automatically use the Cognito identity credentials provider
        // var ddb = new AWS.DynamoDB();
        //
        // // Scan the table
        // ddb.scan({TableName: AWSConfig.tableName}, function (err, data) {
        //   if (err){   // an error occurred
        //     printMessage(err);
        //   }else{      // successful response
        //     console.log(data);
        //   }
        // });
        localStorage.setItem('sessionToken', credential.sessionToken);
        localStorage.setItem('accessKeyId', credential.accessKeyId);
        localStorage.setItem('secretAccessKey', credential.secretAccessKey);
        resolve(credential);
      }
    });
  });



  // var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
  // cognitoidentityserviceprovider.getUser(params, function(err, data) {
  //   if (err) {
  //     console.log(err, err.stack);
  //   } // an error occurred
  //   else{
  //     console.log(data);
  //   } // successful response
  // })
}

export const getIAMRoleInfo = (accessKeyId:string, sessionToken:string) => {
  return new Promise((resolve, reject) => {
    const sts = new AWS.STS();
    const params = {}
    sts.getCallerIdentity(params, (err, data) => {
      if (err)
        reject(err);
      else {
        resolve(data);
      }
    });
  });
};

export const getListPolicies = (accessKeyId:string, secretAccessKey:string, sessionToken: string) => {
  return new Promise((resolve, reject) => {
    const CREDENTIAL = {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      sessionToken: sessionToken
    };
    const iamClient = new IAMClient({ region: "us-east-1", credentials: CREDENTIAL});
    const params = {
      Marker: secretAccessKey,
      MaxItems: 20,
      OnlyAttached: false, /* Options are "true" or "false"*/
      PathPrefix: '/',
      PolicyUsageFilter: "PermissionsPolicy", /* Options are "PermissionsPolicy" or "PermissionsBoundary"*/
      Scope: "All" /* Options are "All", "AWS", "Local"*/
    }
    iamClient.send(new ListPoliciesCommand(params)).then((results) => {
      resolve(results);
    })
  });
};

// Print messages
// const printMessage = (messageString: any) => {
//   console.log(messageString);
// }

