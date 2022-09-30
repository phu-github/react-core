export interface RightInboxProps{
    inboxDetailData?: detailData,
    width?: number,
    height?: number,
    reportedDate?: string,
    reportedBy?: string,
    from?: string,
    summaryTitleMessage?: string,
    subTitle?: string,
    bodyMessage?: string,
    backgroundColor?: string,
}

export interface detailData {
    email_id: string;
    subject: string;
    email_from: string;
    status: string;
    priority: string;
    category: string;
    header_content:string;
    create_at: string;
    reported_at: number;
    reported_by: string
}
