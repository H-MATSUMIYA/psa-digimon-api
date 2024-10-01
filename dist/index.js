var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
const app = express();
app.use(express.json()); // JSONリクエストを扱うため
// シンプルなGETリクエスト
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.json({ message: "Hello, TypeScript!" });
    const response = yield fetch(`https://www.psacard.com/cert/88796953`, {
        method: "GET",
        headers: {
            "Cache-Control": "no-cache",
            Host: "www.psacard.com",
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
        },
    });
    const html = yield response.text();
    res.json({ message: "Hello, TypeScript!", html });
}));
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
