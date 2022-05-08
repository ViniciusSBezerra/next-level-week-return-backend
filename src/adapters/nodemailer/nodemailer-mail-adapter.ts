import nodemailer from "nodemailer"
import { MailAdapter, SendMailData } from "../mail-adapters";

export const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "9ccf368d93e6b0",
        pass: "cd23f4804036c2"
    }
});


export class NodemailerMailAdapter implements MailAdapter{
   async sendMail ({subject, body}: SendMailData) {
            await transport.sendMail({
            from: 'Equipe Feedget <oi@Feedget.com>',
            to: 'Vinicius Souza <viniciussouza2599@gmail.com>',
            subject,
            html: body,
        })
   };
}