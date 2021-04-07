import { readFile } from 'fs';
import nodemailer, { SendMailOptions } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export default class EmailConfig {
  private _transporter: Mail;

  constructor(config: SendMailOptions) {
    this._transporter = nodemailer.createTransport(config);
  }

  public send(from: string, to: string, subject: string, body: any, attachments?: any): Promise<any> {
    try {
      return this._transporter.sendMail({ from, to, subject, html: body, attachments });
    } catch (error) {
      throw error;
    }
  }

  public readHTMLFile(path: string, callback: (html: string) => void) {
    readFile(path, { encoding: 'utf-8' }, (err, html) => {
      if (err) throw err;
      else callback(html);
    });
  }
}
