const nodemailer = require("nodemailer");
/**
 * Nodemailer configuration
 * @param{String} to To Email address
 * @param{String} subject Subject of the email
 * @param{String} htmlContent  Content of the email
 */
module.exports = {
  sendEmail: async function (to, cc, subject, htmlContent) {
    return new Promise((resolve, reject) => {
      const transporter = nodemailer.createTransport({
        service: process.env.email_service,
        host: process.env.email_host,
        secure: false,
        port: process.env.email_port,
        auth: {
          user: process.env.email_user,
          pass: process.env.email_pass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to accept messages");
        }
      });
      transporter
        .sendMail({
          from: `"Green Tiger Admin" <${process.env.email_user}>`,
          to: to,
          cc: cc,
          subject: subject,
          html: htmlContent,
        })
        .then((info) => {
          console.log({ info });
          resolve(info);
        })
        .catch((err) => {
          console.log("ERROR::", err);
          reject(err);
        });
    });
  },
};
