const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);
export default (req, res) => {
  const body = JSON.parse(req.body);
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
  const data = {
    to: [`${process.env.SENDGRID_TO_1}`, `${process.env.SENDGRID_TO_2}`],
    from: `Faruk Ipek <${process.env.SENDGRID_FROM}>`,
    subject: "New Message!",
    replyTo: body.email,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };
  mail.sendMultiple(data);
  res.status(200).json({ status: "Ok" });
};
