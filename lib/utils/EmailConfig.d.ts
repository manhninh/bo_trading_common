import { SendMailOptions } from 'nodemailer';
export default class EmailConfig {
    private _transporter;
    constructor(config: SendMailOptions);
    send(from: string, to: string, subject: string, body: any, attachments?: any): Promise<any>;
    readHTMLFile(path: string, callback: (html: string) => void): void;
}
