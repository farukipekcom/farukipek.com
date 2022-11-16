/* eslint-disable import/no-anonymous-default-export */
import Axios from "axios";
export default async (req, res) => {
  let googleUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRETKEY}&response=${req.body.captcha}`;
  let captchaResponse = await Axios({
    url: googleUrl,
  });
  if (captchaResponse.data.success === false) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ success: false, message: "captcha failed" }));
  } else {
    let response = await Axios({
      method: "post",
      url: process.env.NEXT_PUBLIC_COMMENTS_API,
      data: req.body,
    });
    if (response.status === 201) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          success: true,
          message: "record created, awaiting approval",
        })
      );
    }
  }
};
