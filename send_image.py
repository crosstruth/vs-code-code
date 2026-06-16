"""通过 OneBot WebSocket 发送图片到 QQ 私聊
用法: python send_image.py <图片路径>
"""
import asyncio
import json
import base64
import sys
import websockets

WS_URL = "ws://127.0.0.1:3001"
TOKEN = "XBjNyxn-IATZxilG"
TARGET_QQ = 2602501541

async def send_image(image_path):
    headers = {"Authorization": f"Bearer {TOKEN}"}
    async with websockets.connect(WS_URL, additional_headers=headers) as ws:
        print(f"已连接 OneBot WS")

        with open(image_path, "rb") as f:
            img_bytes = f.read()
        img_b64 = base64.b64encode(img_bytes).decode("ascii")
        print(f"图片: {len(img_bytes)} 字节 → base64: {len(img_b64)} 字符")

        cq_code = f"[CQ:image,file=base64://{img_b64}]"
        echo = "send_img_001"
        req = {
            "action": "send_private_msg",
            "params": {"user_id": TARGET_QQ, "message": cq_code},
            "echo": echo
        }
        await ws.send(json.dumps(req))
        print(f"已发送到 QQ {TARGET_QQ}")

        try:
            resp = await asyncio.wait_for(ws.recv(), timeout=15)
            data = json.loads(resp)
            if data.get("echo") == echo:
                if data.get("retcode") == 0:
                    print("✅ 发送成功")
                else:
                    print(f"❌ 失败: {data}")
        except asyncio.TimeoutError:
            print("⚠ 响应超时，消息可能已发送")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("用法: python send_image.py <图片路径>")
        sys.exit(1)
    asyncio.run(send_image(sys.argv[1]))
