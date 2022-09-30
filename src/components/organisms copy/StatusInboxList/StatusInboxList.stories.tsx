import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {StatusInboxList} from './index';

export default {
  title: 'organisms/StatusInboxList',
  component: StatusInboxList,
} as ComponentMeta<typeof StatusInboxList>;

const Template: ComponentStory<typeof StatusInboxList> = (args) => <StatusInboxList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  statusInboxArr: [
    {
      "Subject": {
        "S": "Subject 2"
      },
      "created_at": {
        "N": "1660290119"
      },
      "status": {
        "S": "In Review"
      },
      "priority": {
        "S": "Low"
      },
      "threat_score": {
        "N": "3"
      },
      "zone_id": {
        "N": "65"
      },
      "header_content": {
        "S": "Citibank Vietnam <mailto:citibank@edm.citibank.com.vn> \n[QC] Đăng ký tham gia ngay để nhận Vali sành điệu cùng Thẻ Tín Dụng Citi\nTo: \"mailto:trantrongphu1983@gmail.com\" <mailto:trantrongphu1983@gmail.com> \nReply-To: mailto:citibank.3294509340.4401811.2144609726@edm.citibank.com.vn \nArc-Seal: i=1; a=rsa-sha256; t=1660202170; cv=none; d=google.com; s=arc-20160816; b=pmmQ9/Uq4xfS9A0oMs8KsaLFUtc+P4CGwu9pZQ2Qt3MaXYnZHtvL36t8uAKcRBKMEg B5N+y2DQicytMSjwgDHPK4U1FhHt/+jptDnZl9PpfGidMBDs67gd21obATAZpwoxTeOd qg1FiZqdYCmLZ1ll1RH+X5IS1PziYbg8xIdBX4Q9K9CQLj0mjPA4q1FAsYPhDg5587zp qBqCMcLi63JNInL96PGDtDSAU7JQJ4esTbGVzVp4UrQ4E619RtI5jGCEouACzMzH4lRk dvF4/zqs1J7QScx0H4bmBJez9qM0/L2DPr1Y3vBwfyLBgJXqXfr2+RT7IlVNN287+XkN fThw==\nX-Received: by 2002:a05:6602:2b09:b0:67f:c159:91b9 with SMTP id p9-20020a0566022b0900b0067fc15991b9mr12890299iov.182.1660202170528; Thu, 11 Aug 2022 00:16:10 -0700 (PDT)\nReturn-Path: <mailto:citibank.3294509340.4401811.2144609726@edm.citibank.com.vn>\nArc-Authentication-Results: i=1; mx.google.com; dkim=pass header.i=@citibank.com.vn header.s=maila header.b=VaTeBqlu; dkim=pass header.i=@edm.citibank.com.vn header.s=maila header.b=\"MQ/6qyI5\"; spf=pass (google.com: domain of mailto:citibank.3294509340.4401811.2144609726@edm.citibank.com.vn designates 67.231.145.225 as permitted sender) mailto:smtp.mailfrom=citibank.3294509340.4401811.2144609726@edm.citibank.com.vn; dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=edm.citibank.com.vn\nX-Proofpoint-Virus-Version: vendor=baseguard engine=ICAP:2.0.205,Aquarius:18.0.883,Hydra:6.0.517,FMLib:17.11.122.1 definitions=2022-08-11_03,2022-08-10_01,2022-06-22_01\nX-Google-Smtp-Source: AA6agR6oMLS75aQ59Mdr4dOI4v+Qvxf2+RNVCoeTZTXdjihb0iUlFVPckbP1wHSBOy0sp/Cg171l\nMime-Version: 1.0\nAuthentication-Results: mx.google.com; dkim=pass header.i=@citibank.com.vn header.s=maila header.b=VaTeBqlu; dkim=pass header.i=@edm.citibank.com.vn header.s=maila header.b=\"MQ/6qyI5\"; spf=pass (google.com: domain of mailto:citibank.3294509340.4401811.2144609726@edm.citibank.com.vn designates 67.231.145.225 as permitted sender) mailto:smtp.mailfrom=citibank.3294509340.4401811.2144609726@edm.citibank.com.vn; dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=edm.citibank.com.vn\nArc-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816; h=content-transfer-encoding:mime-version:message-id:date:subject:to :reply-to:from:dkim-signature:dkim-signature; bh=+J8SbokXe0Gv6wJsR7a9j4dqJU7bhiG/MEXogra91Bg=; b=PRk4tiA+Y8apOecLOZ0G7L7KWVszDY2aelB0he0SoigmpW7Cynz3BGxJggeGB7yVCG PoXn4YScwNJV9HgYx7aorf2GhQ/jG50xR08SXxokMugtLCdaoQ4LZfZZOWYKpt6DEnB0 3ebLSY6sfYPrs9yFmhzy+BEZztXRTchiG629gJ3iiMTxJyEDvjshSuxJmwFQSwjC8c9S Z1Qi+o0mGZKbJQFlU7m7Sfxqvj020OdIgLoPKSTkWzNCz3GDRwVh5tMMoIQyD4DS3cv6 BiW+Vj7yqIHZfzF3JCzXNHpYfE1dSnVvkvAQ9Aj01Nt706pnhOUEa21R2h2kaYRSVlHA PSzA==\nDkim-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=citibank.com.vn; h=from : reply-to : to : subject : date : message-id : mime-version : content-type : content-transfer-encoding; s=maila; bh=+J8SbokXe0Gv6wJsR7a9j4dqJU7bhiG/MEXogra91Bg=; b=VaTeBqluUB+Ziw/reKP6xP78gBazI3yAoSvFC0id5go8V1p5FPGHWPE4cP9OTAS3kZOa Sb6o6gkVAAQ0ISnxCzoVRpzO1bh4yvfFCIbXPn05GMADKfUPC0kfLO2SKfz5ae9a9M5e IaE3k+ComcbhWnfsv5rdL75wafVEsWCFMnLPPx4WiJU6b9B6Jh6W31IWsT9YIIMM4YUy t/FWIvuKARWDcfYLzAYeaBHCAwAuvgR4r2wM3+p/44wxhn9rONG5O0gtEE5XO979DeZe IWlJS8b66pQ1iLf1R1JKiju9erSmqbX1TI7CHZ/Hf8I70K/FbuS4bDyf2BL/JqYoldvs yw== \nDkim-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=edm.citibank.com.vn; h=from : reply-to : to : subject : date : message-id : mime-version : content-type : content-transfer-encoding; s=maila; bh=+J8SbokXe0Gv6wJsR7a9j4dqJU7bhiG/MEXogra91Bg=; b=MQ/6qyI5+JrSVu2KXjmNYuhwOK62NtqUZPJSu4wZEp7j1rKT6TKyAM/sjkFBG3IbG9pf xQKFre5rL13Gi5GtokXOkoHz9kirCr9nHOKTbO3IVBTrRCpAfFT4TEZtg1MYurZtzLOk uj4OzxU09/mDEmTrpQeTWs49rqeStJnyXTahkcJ/1SUVOp8iPG8v9rVlReLQ+cT/Wqmy KlpxSYW6jIqkpAM9z0iU00XJPy8kWXLx77Oo2Bb5LXjF+mqD8kDNLp2qizQUBGGsBAoj pvutBwJ1S1ABYJdP37tMK/XMBOIrcucgpEFPoSWht57smpHzsDiDSs/C3wwIHW10mmYo fA== \nX-Mailer: Brick Street Connect mailto:10r5\n<1660202167744.citibank.3294509340.4401811.2144609726@edm.citibank.com.vn>\nContent-Transfer-Encoding: base64\nContent-Type: text/html; charset=\"UTF-8\"\nReceived-Spf: pass (google.com: domain of mailto:citibank.3294509340.4401811.2144609726@edm.citibank.com.vn designates 67.231.145.225 as permitted sender) client-ip=67.231.145.225;\nDelivered-To: mailto:trantrongphu1983@gmail.com\nReceived: by 2002:a05:6520:2f95:b0:20e:9d71:cd16 with SMTP id 21csp309086lkf; Thu, 11 Aug 2022 00:16:10 -0700 (PDT)\nReceived: from appmailout1.citi.com (appmailout1.citi.com. [67.231.145.225]) by mx.google.com with ESMTPS id w8-20020a056e02190800b002e18031edbbsi4406686ilu.95.2022.08.11.00.16.09 for <mailto:trantrongphu1983@gmail.com> (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128); Thu, 11 Aug 2022 00:16:10 -0700 (PDT)\nReceived: from pps.filterd (m0120833.ppops.net [127.0.0.1]) by mx0a-00123c010.pphosted.com (8.17.1.5/8.17.1.5) with ESMTP id 27B74rfH016816 for <mailto:trantrongphu1983@gmail.com>; Thu, 11 Aug 2022 07:16:09 GMT\nReceived: from mail.citigroup.com (2._spf.citigroup.com [192.193.193.89]) by mx0a-00123c010.pphosted.com (PPS) with ESMTPS id 3huwpuvfd5-1 (version=TLSv1.2 cipher=AES256-GCM-SHA384 bits=256 verify=NOT) for <mailto:trantrongphu1983@gmail.com>; Thu, 11 Aug 2022 07:16:09 +0000\nReceived: from imbhub-gt51.nam.nsroot.net (imbhub-gt51.nam.nsroot.net [153.40.243.13]) by smtpinbound.citigroup.com (Sentrion-MTA-4.5.5/Sentrion-MTA-4.5.5) with ESMTPS id 27B7G8DE032143 (version=TLSv1.2 cipher=ECDHE-RSA-AES256-GCM-SHA384 bits=256 verify=OK) for <mailto:trantrongphu1983@gmail.com>; Thu, 11 Aug 2022 07:16:08 GMT\nReceived: from emailapps.globalcommon.citi.com (sdcgcgkncla03p.apac.nsroot.net [10.219.169.234]) by imbhub-gt51.nam.nsroot.net (Sentrion-MTA-4.5.5/Sentrion-MTA-4.5.5) with ESMTP id 27B6eKd3005347 for <mailto:trantrongphu1983@gmail.com>; Thu, 11 Aug 2022 07:16:07 GMT"
      },
      "reported_by": {
        "S": "mailto:ttrongphu@tma.com.vn"
      },
      "updated_at": {
        "N": "1660290119"
      },
      "virus_scan_results": {
        "S": ""
      },
      "reported_at": {
        "N": "1660290119"
      },
      "email_from": {
        "S": "mailto:ttrongphu@tma.com.vn"
      },
      "category": {
        "S": "Clean"
      },
      "email_id": {
        "S": "2"
      }
    },
    {
      "Subject": {
        "S": "Subject 2"
      },
      "created_at": {
        "N": "1660290119"
      },
      "status": {
        "S": "In Review"
      },
      "priority": {
        "S": "Low"
      },
      "threat_score": {
        "N": "3"
      },
      "zone_id": {
        "N": "65"
      },
      "header_content": {
        "S": "Citibank Vietnam <mailto:citibank@edm.citibank.com.vn> \n[QC] Đăng ký tham gia ngay để nhận Vali sành điệu cùng Thẻ Tín Dụng Citi\nTo: \"mailto:trantrongphu1983@gmail.com\" <mailto:trantrongphu1983@gmail.com> \nReply-To: mailto:citibank.3294509340.4401811.2144609726@edm.citibank.com.vn \nArc-Seal: i=1; a=rsa-sha256; t=1660202170; cv=none; d=google.com; s=arc-20160816; b=pmmQ9/Uq4xfS9A0oMs8KsaLFUtc+P4CGwu9pZQ2Qt3MaXYnZHtvL36t8uAKcRBKMEg B5N+y2DQicytMSjwgDHPK4U1FhHt/+jptDnZl9PpfGidMBDs67gd21obATAZpwoxTeOd qg1FiZqdYCmLZ1ll1RH+X5IS1PziYbg8xIdBX4Q9K9CQLj0mjPA4q1FAsYPhDg5587zp qBqCMcLi63JNInL96PGDtDSAU7JQJ4esTbGVzVp4UrQ4E619RtI5jGCEouACzMzH4lRk dvF4/zqs1J7QScx0H4bmBJez9qM0/L2DPr1Y3vBwfyLBgJXqXfr2+RT7IlVNN287+XkN fThw==\nX-Received: by 2002:a05:6602:2b09:b0:67f:c159:91b9 with SMTP id p9-20020a0566022b0900b0067fc15991b9mr12890299iov.182.1660202170528; Thu, 11 Aug 2022 00:16:10 -0700 (PDT)\nReturn-Path: <mailto:citibank.3294509340.4401811.2144609726@edm.citibank.com.vn>\nArc-Authentication-Results: i=1; mx.google.com; dkim=pass header.i=@citibank.com.vn header.s=maila header.b=VaTeBqlu; dkim=pass header.i=@edm.citibank.com.vn header.s=maila header.b=\"MQ/6qyI5\"; spf=pass (google.com: domain of mailto:citibank.3294509340.4401811.2144609726@edm.citibank.com.vn designates 67.231.145.225 as permitted sender) mailto:smtp.mailfrom=citibank.3294509340.4401811.2144609726@edm.citibank.com.vn; dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=edm.citibank.com.vn\nX-Proofpoint-Virus-Version: vendor=baseguard engine=ICAP:2.0.205,Aquarius:18.0.883,Hydra:6.0.517,FMLib:17.11.122.1 definitions=2022-08-11_03,2022-08-10_01,2022-06-22_01\nX-Google-Smtp-Source: AA6agR6oMLS75aQ59Mdr4dOI4v+Qvxf2+RNVCoeTZTXdjihb0iUlFVPckbP1wHSBOy0sp/Cg171l\nMime-Version: 1.0\nAuthentication-Results: mx.google.com; dkim=pass header.i=@citibank.com.vn header.s=maila header.b=VaTeBqlu; dkim=pass header.i=@edm.citibank.com.vn header.s=maila header.b=\"MQ/6qyI5\"; spf=pass (google.com: domain of mailto:citibank.3294509340.4401811.2144609726@edm.citibank.com.vn designates 67.231.145.225 as permitted sender) mailto:smtp.mailfrom=citibank.3294509340.4401811.2144609726@edm.citibank.com.vn; dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=edm.citibank.com.vn\nArc-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816; h=content-transfer-encoding:mime-version:message-id:date:subject:to :reply-to:from:dkim-signature:dkim-signature; bh=+J8SbokXe0Gv6wJsR7a9j4dqJU7bhiG/MEXogra91Bg=; b=PRk4tiA+Y8apOecLOZ0G7L7KWVszDY2aelB0he0SoigmpW7Cynz3BGxJggeGB7yVCG PoXn4YScwNJV9HgYx7aorf2GhQ/jG50xR08SXxokMugtLCdaoQ4LZfZZOWYKpt6DEnB0 3ebLSY6sfYPrs9yFmhzy+BEZztXRTchiG629gJ3iiMTxJyEDvjshSuxJmwFQSwjC8c9S Z1Qi+o0mGZKbJQFlU7m7Sfxqvj020OdIgLoPKSTkWzNCz3GDRwVh5tMMoIQyD4DS3cv6 BiW+Vj7yqIHZfzF3JCzXNHpYfE1dSnVvkvAQ9Aj01Nt706pnhOUEa21R2h2kaYRSVlHA PSzA==\nDkim-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=citibank.com.vn; h=from : reply-to : to : subject : date : message-id : mime-version : content-type : content-transfer-encoding; s=maila; bh=+J8SbokXe0Gv6wJsR7a9j4dqJU7bhiG/MEXogra91Bg=; b=VaTeBqluUB+Ziw/reKP6xP78gBazI3yAoSvFC0id5go8V1p5FPGHWPE4cP9OTAS3kZOa Sb6o6gkVAAQ0ISnxCzoVRpzO1bh4yvfFCIbXPn05GMADKfUPC0kfLO2SKfz5ae9a9M5e IaE3k+ComcbhWnfsv5rdL75wafVEsWCFMnLPPx4WiJU6b9B6Jh6W31IWsT9YIIMM4YUy t/FWIvuKARWDcfYLzAYeaBHCAwAuvgR4r2wM3+p/44wxhn9rONG5O0gtEE5XO979DeZe IWlJS8b66pQ1iLf1R1JKiju9erSmqbX1TI7CHZ/Hf8I70K/FbuS4bDyf2BL/JqYoldvs yw== \nDkim-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=edm.citibank.com.vn; h=from : reply-to : to : subject : date : message-id : mime-version : content-type : content-transfer-encoding; s=maila; bh=+J8SbokXe0Gv6wJsR7a9j4dqJU7bhiG/MEXogra91Bg=; b=MQ/6qyI5+JrSVu2KXjmNYuhwOK62NtqUZPJSu4wZEp7j1rKT6TKyAM/sjkFBG3IbG9pf xQKFre5rL13Gi5GtokXOkoHz9kirCr9nHOKTbO3IVBTrRCpAfFT4TEZtg1MYurZtzLOk uj4OzxU09/mDEmTrpQeTWs49rqeStJnyXTahkcJ/1SUVOp8iPG8v9rVlReLQ+cT/Wqmy KlpxSYW6jIqkpAM9z0iU00XJPy8kWXLx77Oo2Bb5LXjF+mqD8kDNLp2qizQUBGGsBAoj pvutBwJ1S1ABYJdP37tMK/XMBOIrcucgpEFPoSWht57smpHzsDiDSs/C3wwIHW10mmYo fA== \nX-Mailer: Brick Street Connect mailto:10r5\n<1660202167744.citibank.3294509340.4401811.2144609726@edm.citibank.com.vn>\nContent-Transfer-Encoding: base64\nContent-Type: text/html; charset=\"UTF-8\"\nReceived-Spf: pass (google.com: domain of mailto:citibank.3294509340.4401811.2144609726@edm.citibank.com.vn designates 67.231.145.225 as permitted sender) client-ip=67.231.145.225;\nDelivered-To: mailto:trantrongphu1983@gmail.com\nReceived: by 2002:a05:6520:2f95:b0:20e:9d71:cd16 with SMTP id 21csp309086lkf; Thu, 11 Aug 2022 00:16:10 -0700 (PDT)\nReceived: from appmailout1.citi.com (appmailout1.citi.com. [67.231.145.225]) by mx.google.com with ESMTPS id w8-20020a056e02190800b002e18031edbbsi4406686ilu.95.2022.08.11.00.16.09 for <mailto:trantrongphu1983@gmail.com> (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128); Thu, 11 Aug 2022 00:16:10 -0700 (PDT)\nReceived: from pps.filterd (m0120833.ppops.net [127.0.0.1]) by mx0a-00123c010.pphosted.com (8.17.1.5/8.17.1.5) with ESMTP id 27B74rfH016816 for <mailto:trantrongphu1983@gmail.com>; Thu, 11 Aug 2022 07:16:09 GMT\nReceived: from mail.citigroup.com (2._spf.citigroup.com [192.193.193.89]) by mx0a-00123c010.pphosted.com (PPS) with ESMTPS id 3huwpuvfd5-1 (version=TLSv1.2 cipher=AES256-GCM-SHA384 bits=256 verify=NOT) for <mailto:trantrongphu1983@gmail.com>; Thu, 11 Aug 2022 07:16:09 +0000\nReceived: from imbhub-gt51.nam.nsroot.net (imbhub-gt51.nam.nsroot.net [153.40.243.13]) by smtpinbound.citigroup.com (Sentrion-MTA-4.5.5/Sentrion-MTA-4.5.5) with ESMTPS id 27B7G8DE032143 (version=TLSv1.2 cipher=ECDHE-RSA-AES256-GCM-SHA384 bits=256 verify=OK) for <mailto:trantrongphu1983@gmail.com>; Thu, 11 Aug 2022 07:16:08 GMT\nReceived: from emailapps.globalcommon.citi.com (sdcgcgkncla03p.apac.nsroot.net [10.219.169.234]) by imbhub-gt51.nam.nsroot.net (Sentrion-MTA-4.5.5/Sentrion-MTA-4.5.5) with ESMTP id 27B6eKd3005347 for <mailto:trantrongphu1983@gmail.com>; Thu, 11 Aug 2022 07:16:07 GMT"
      },
      "reported_by": {
        "S": "mailto:ttrongphu@tma.com.vn"
      },
      "updated_at": {
        "N": "1660290119"
      },
      "virus_scan_results": {
        "S": ""
      },
      "reported_at": {
        "N": "1660290119"
      },
      "email_from": {
        "S": "mailto:ttrongphu@tma.com.vn"
      },
      "category": {
        "S": "Clean"
      },
      "email_id": {
        "S": "2"
      }
    },
    {
      "Subject": {
        "S": "Subject 2"
      },
      "created_at": {
        "N": "1660290119"
      },
      "status": {
        "S": "In Review"
      },
      "priority": {
        "S": "Low"
      },
      "threat_score": {
        "N": "3"
      },
      "zone_id": {
        "N": "65"
      },
      "header_content": {
        "S": "Citibank Vietnam <mailto:citibank@edm.citibank.com.vn> \n[QC] Đăng ký tham gia ngay để nhận Vali sành điệu cùng Thẻ Tín Dụng Citi\nTo: \"mailto:trantrongphu1983@gmail.com\" <mailto:trantrongphu1983@gmail.com> \nReply-To: mailto:citibank.3294509340.4401811.2144609726@edm.citibank.com.vn \nArc-Seal: i=1; a=rsa-sha256; t=1660202170; cv=none; d=google.com; s=arc-20160816; b=pmmQ9/Uq4xfS9A0oMs8KsaLFUtc+P4CGwu9pZQ2Qt3MaXYnZHtvL36t8uAKcRBKMEg B5N+y2DQicytMSjwgDHPK4U1FhHt/+jptDnZl9PpfGidMBDs67gd21obATAZpwoxTeOd qg1FiZqdYCmLZ1ll1RH+X5IS1PziYbg8xIdBX4Q9K9CQLj0mjPA4q1FAsYPhDg5587zp qBqCMcLi63JNInL96PGDtDSAU7JQJ4esTbGVzVp4UrQ4E619RtI5jGCEouACzMzH4lRk dvF4/zqs1J7QScx0H4bmBJez9qM0/L2DPr1Y3vBwfyLBgJXqXfr2+RT7IlVNN287+XkN fThw==\nX-Received: by 2002:a05:6602:2b09:b0:67f:c159:91b9 with SMTP id p9-20020a0566022b0900b0067fc15991b9mr12890299iov.182.1660202170528; Thu, 11 Aug 2022 00:16:10 -0700 (PDT)\nReturn-Path: <mailto:citibank.3294509340.4401811.2144609726@edm.citibank.com.vn>\nArc-Authentication-Results: i=1; mx.google.com; dkim=pass header.i=@citibank.com.vn header.s=maila header.b=VaTeBqlu; dkim=pass header.i=@edm.citibank.com.vn header.s=maila header.b=\"MQ/6qyI5\"; spf=pass (google.com: domain of mailto:citibank.3294509340.4401811.2144609726@edm.citibank.com.vn designates 67.231.145.225 as permitted sender) mailto:smtp.mailfrom=citibank.3294509340.4401811.2144609726@edm.citibank.com.vn; dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=edm.citibank.com.vn\nX-Proofpoint-Virus-Version: vendor=baseguard engine=ICAP:2.0.205,Aquarius:18.0.883,Hydra:6.0.517,FMLib:17.11.122.1 definitions=2022-08-11_03,2022-08-10_01,2022-06-22_01\nX-Google-Smtp-Source: AA6agR6oMLS75aQ59Mdr4dOI4v+Qvxf2+RNVCoeTZTXdjihb0iUlFVPckbP1wHSBOy0sp/Cg171l\nMime-Version: 1.0\nAuthentication-Results: mx.google.com; dkim=pass header.i=@citibank.com.vn header.s=maila header.b=VaTeBqlu; dkim=pass header.i=@edm.citibank.com.vn header.s=maila header.b=\"MQ/6qyI5\"; spf=pass (google.com: domain of mailto:citibank.3294509340.4401811.2144609726@edm.citibank.com.vn designates 67.231.145.225 as permitted sender) mailto:smtp.mailfrom=citibank.3294509340.4401811.2144609726@edm.citibank.com.vn; dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=edm.citibank.com.vn\nArc-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816; h=content-transfer-encoding:mime-version:message-id:date:subject:to :reply-to:from:dkim-signature:dkim-signature; bh=+J8SbokXe0Gv6wJsR7a9j4dqJU7bhiG/MEXogra91Bg=; b=PRk4tiA+Y8apOecLOZ0G7L7KWVszDY2aelB0he0SoigmpW7Cynz3BGxJggeGB7yVCG PoXn4YScwNJV9HgYx7aorf2GhQ/jG50xR08SXxokMugtLCdaoQ4LZfZZOWYKpt6DEnB0 3ebLSY6sfYPrs9yFmhzy+BEZztXRTchiG629gJ3iiMTxJyEDvjshSuxJmwFQSwjC8c9S Z1Qi+o0mGZKbJQFlU7m7Sfxqvj020OdIgLoPKSTkWzNCz3GDRwVh5tMMoIQyD4DS3cv6 BiW+Vj7yqIHZfzF3JCzXNHpYfE1dSnVvkvAQ9Aj01Nt706pnhOUEa21R2h2kaYRSVlHA PSzA==\nDkim-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=citibank.com.vn; h=from : reply-to : to : subject : date : message-id : mime-version : content-type : content-transfer-encoding; s=maila; bh=+J8SbokXe0Gv6wJsR7a9j4dqJU7bhiG/MEXogra91Bg=; b=VaTeBqluUB+Ziw/reKP6xP78gBazI3yAoSvFC0id5go8V1p5FPGHWPE4cP9OTAS3kZOa Sb6o6gkVAAQ0ISnxCzoVRpzO1bh4yvfFCIbXPn05GMADKfUPC0kfLO2SKfz5ae9a9M5e IaE3k+ComcbhWnfsv5rdL75wafVEsWCFMnLPPx4WiJU6b9B6Jh6W31IWsT9YIIMM4YUy t/FWIvuKARWDcfYLzAYeaBHCAwAuvgR4r2wM3+p/44wxhn9rONG5O0gtEE5XO979DeZe IWlJS8b66pQ1iLf1R1JKiju9erSmqbX1TI7CHZ/Hf8I70K/FbuS4bDyf2BL/JqYoldvs yw== \nDkim-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=edm.citibank.com.vn; h=from : reply-to : to : subject : date : message-id : mime-version : content-type : content-transfer-encoding; s=maila; bh=+J8SbokXe0Gv6wJsR7a9j4dqJU7bhiG/MEXogra91Bg=; b=MQ/6qyI5+JrSVu2KXjmNYuhwOK62NtqUZPJSu4wZEp7j1rKT6TKyAM/sjkFBG3IbG9pf xQKFre5rL13Gi5GtokXOkoHz9kirCr9nHOKTbO3IVBTrRCpAfFT4TEZtg1MYurZtzLOk uj4OzxU09/mDEmTrpQeTWs49rqeStJnyXTahkcJ/1SUVOp8iPG8v9rVlReLQ+cT/Wqmy KlpxSYW6jIqkpAM9z0iU00XJPy8kWXLx77Oo2Bb5LXjF+mqD8kDNLp2qizQUBGGsBAoj pvutBwJ1S1ABYJdP37tMK/XMBOIrcucgpEFPoSWht57smpHzsDiDSs/C3wwIHW10mmYo fA== \nX-Mailer: Brick Street Connect mailto:10r5\n<1660202167744.citibank.3294509340.4401811.2144609726@edm.citibank.com.vn>\nContent-Transfer-Encoding: base64\nContent-Type: text/html; charset=\"UTF-8\"\nReceived-Spf: pass (google.com: domain of mailto:citibank.3294509340.4401811.2144609726@edm.citibank.com.vn designates 67.231.145.225 as permitted sender) client-ip=67.231.145.225;\nDelivered-To: mailto:trantrongphu1983@gmail.com\nReceived: by 2002:a05:6520:2f95:b0:20e:9d71:cd16 with SMTP id 21csp309086lkf; Thu, 11 Aug 2022 00:16:10 -0700 (PDT)\nReceived: from appmailout1.citi.com (appmailout1.citi.com. [67.231.145.225]) by mx.google.com with ESMTPS id w8-20020a056e02190800b002e18031edbbsi4406686ilu.95.2022.08.11.00.16.09 for <mailto:trantrongphu1983@gmail.com> (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128); Thu, 11 Aug 2022 00:16:10 -0700 (PDT)\nReceived: from pps.filterd (m0120833.ppops.net [127.0.0.1]) by mx0a-00123c010.pphosted.com (8.17.1.5/8.17.1.5) with ESMTP id 27B74rfH016816 for <mailto:trantrongphu1983@gmail.com>; Thu, 11 Aug 2022 07:16:09 GMT\nReceived: from mail.citigroup.com (2._spf.citigroup.com [192.193.193.89]) by mx0a-00123c010.pphosted.com (PPS) with ESMTPS id 3huwpuvfd5-1 (version=TLSv1.2 cipher=AES256-GCM-SHA384 bits=256 verify=NOT) for <mailto:trantrongphu1983@gmail.com>; Thu, 11 Aug 2022 07:16:09 +0000\nReceived: from imbhub-gt51.nam.nsroot.net (imbhub-gt51.nam.nsroot.net [153.40.243.13]) by smtpinbound.citigroup.com (Sentrion-MTA-4.5.5/Sentrion-MTA-4.5.5) with ESMTPS id 27B7G8DE032143 (version=TLSv1.2 cipher=ECDHE-RSA-AES256-GCM-SHA384 bits=256 verify=OK) for <mailto:trantrongphu1983@gmail.com>; Thu, 11 Aug 2022 07:16:08 GMT\nReceived: from emailapps.globalcommon.citi.com (sdcgcgkncla03p.apac.nsroot.net [10.219.169.234]) by imbhub-gt51.nam.nsroot.net (Sentrion-MTA-4.5.5/Sentrion-MTA-4.5.5) with ESMTP id 27B6eKd3005347 for <mailto:trantrongphu1983@gmail.com>; Thu, 11 Aug 2022 07:16:07 GMT"
      },
      "reported_by": {
        "S": "mailto:ttrongphu@tma.com.vn"
      },
      "updated_at": {
        "N": "1660290119"
      },
      "virus_scan_results": {
        "S": ""
      },
      "reported_at": {
        "N": "1660290119"
      },
      "email_from": {
        "S": "mailto:ttrongphu@tma.com.vn"
      },
      "category": {
        "S": "Clean"
      },
      "email_id": {
        "S": "2"
      }
    }
  ]
};
