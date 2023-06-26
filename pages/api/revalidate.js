// export default async function handler(req, res) {
//   if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
//     return res.status(401).json({ message: "Invalid token" });
//   }

//   try {
//     await res.revalidate(req.query.path);
//     return res.json({ revalidated: true });
//   } catch (err) {
//     return res.status(500).send("Error revalidating");
//   }
// }

export default async function handler(req, res) {
  let revalidated = false;
  try {
    await res.revalidate(`/blog/${req.query.path}`);
    revalidated = true;
  } catch (err) {
    console.log("revalidate error", err);
  }
  res.json({revalidated});
}
