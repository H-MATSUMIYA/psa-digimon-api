import express, { Request, Response } from "express";

const app = express();
app.use(express.json()); // JSONリクエストを扱うため

// シンプルなGETリクエスト
app.get("/", async (req: Request, res: Response) => {
  // res.json({ message: "Hello, TypeScript!" });
  try {
    const response = await fetch(`https://www.psacard.com/cert/88796953`, {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
        Host: "www.psacard.com",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    res.json({ message: "Hello, TypeScript!", html });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// パラメータ付きGETリクエスト
app.get("/api/items/:id", (req: Request, res: Response) => {
  const itemId = req.params.id;
  res.json({ itemId, message: `Item ${itemId} retrieved!` });
});

// POSTリクエスト
app.post("/api/items", (req: Request, res: Response) => {
  const newItem = req.body;
  res.json({ newItem, message: "New item created!" });
});

// サーバーのポート設定
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
