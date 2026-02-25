#!/usr/bin/env python3
"""
复数教学网站启动脚本
运行本地服务器来预览网站
"""

import http.server
import socket
import socketserver
import webbrowser
import os

PORT = int(os.environ.get("PORT", "8000"))
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def start_server():
    """启动本地服务器"""
    os.chdir(DIRECTORY)

    port = PORT
    try:
        httpd = socketserver.TCPServer(("", port), MyHTTPRequestHandler)
    except OSError as exc:
        if exc.errno == 48:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as temp_socket:
                temp_socket.bind(("", 0))
                port = temp_socket.getsockname()[1]
            httpd = socketserver.TCPServer(("", port), MyHTTPRequestHandler)
        else:
            raise

    with httpd:
        print("=" * 50)
        print("🧮 复数教学网站 - 本地服务器")
        print("=" * 50)
        print(f"📁 工作目录: {DIRECTORY}")
        print(f"🌐 服务器地址: http://localhost:{port}")
        print(f"📊 端口: {port}")
        print("=" * 50)
        print("✅ 服务器已启动！")
        print("💡 提示:")
        print("   - 按 Ctrl+C 停止服务器")
        print(f"   - 在浏览器中访问 http://localhost:{port}")
        print("   - 或等待自动打开浏览器...")
        print("=" * 50)
        print()

        url = f"http://localhost:{port}"
        webbrowser.open(url)
        print(f"🚀 正在打开浏览器: {url}\n")

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n⏹️  服务器已停止")
            print("👋 感谢使用！")

if __name__ == "__main__":
    start_server()
