import express from "express";
const app = express();
app.use(express.json()); // JSONリクエストを扱うため
// シンプルなGETリクエスト
app.get("/", (req, res) => {
    res.json({ message: "Hello, TypeScript!" });
});
// パラメータ付きGETリクエスト
app.get("/api/items/:id", (req, res) => {
    const itemId = req.params.id;
    res.json({ itemId, message: `Item ${itemId} retrieved!` });
});
// POSTリクエスト
app.post("/api/items", (req, res) => {
    const newItem = req.body;
    res.json({ newItem, message: "New item created!" });
});
// サーバーのポート設定
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
