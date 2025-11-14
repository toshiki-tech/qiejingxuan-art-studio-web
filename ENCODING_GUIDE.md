# 文件编码处理指南

## 当前项目编码配置

本项目默认使用 **UTF-8** 编码，但我们已配置了对其他编码的兼容支持。

## 全局设置的影响范围

### ✅ 不会影响文件编码的设置：

1. **Git配置**（只影响提交信息和日志显示）：
   - `i18n.commitencoding utf-8`
   - `i18n.logoutputencoding utf-8`
   - `core.quotepath false`

2. **PowerShell UTF-8配置**（只影响终端显示）：
   - 终端输入/输出显示
   - 命令行参数传递

### ⚠️ 可能影响文件的设置：

- **编辑器配置**：VSCode等编辑器打开文件时的编码识别和保存

## 处理老项目中的不同编码文件

### 场景1：项目中有Shift-JIS编码的文件

#### 方法1：使用 `.editorconfig` 指定编码

在 `.editorconfig` 中为特定文件或目录指定编码：

```ini
# 为特定目录的所有文件指定Shift-JIS
[legacy-code/**/*]
charset = shift_jis

# 为特定类型的文件指定Shift-JIS
[*.{sjis.txt,legacy.csv}]
charset = shift_jis
```

#### 方法2：在VSCode中手动指定编码

1. 打开文件后，点击右下角的编码显示（如"UTF-8"）
2. 选择"通过编码重新打开" → 选择"Shift JIS"
3. 编辑后保存时，确认使用原编码保存

#### 方法3：转换文件编码为UTF-8

对于新项目，建议统一转换为UTF-8：

```powershell
# 使用PowerShell转换文件编码
$content = Get-Content -Path "old_file.txt" -Encoding Default
Set-Content -Path "old_file.txt" -Value $content -Encoding UTF8
```

或使用专门工具：
- `iconv` (Linux/Mac/WSL)
- VSCode的"通过编码保存"功能
- 专门的编码转换工具（如nkf）

### 场景2：混合编码的大型项目

#### 方法1：为不同子项目设置Git配置

在子目录中创建 `.git/config` 或使用本地配置：

```bash
# 进入使用Shift-JIS的子项目目录
cd legacy-project/

# 为这个目录设置不同的Git配置
git config --local i18n.commitencoding shift_jis
git config --local i18n.logoutputencoding shift_jis
```

#### 方法2：使用 `.gitattributes` 指定文件处理方式

创建 `.gitattributes` 文件：

```
# 文本文件使用LF换行
* text=auto eol=lf

# 特定编码的文件不进行换行符转换
*.sjis -text
legacy-code/** -text

# 二进制文件
*.png binary
*.jpg binary
*.pdf binary
```

## 推荐的工作流程

### 对于新项目：
1. ✅ 统一使用UTF-8编码
2. ✅ 配置 `.editorconfig` 确保团队一致
3. ✅ 启用VSCode的 `files.autoGuessEncoding`

### 对于老项目：
1. ⚠️ **先备份！**
2. 🔍 识别文件编码：
   ```powershell
   # 检查文件编码
   Get-Content -Path "file.txt" -Encoding Default
   ```
3. 📝 在 `.editorconfig` 或 `.vscode/settings.json` 中明确标注
4. 💡 逐步迁移到UTF-8（如果可能）

## 常见问题

### Q: VSCode打开Shift-JIS文件显示乱码？
**A:** 
1. 确保已启用 `"files.autoGuessEncoding": true`
2. 手动选择正确编码："通过编码重新打开" → "Shift JIS"

### Q: Git显示文件名乱码？
**A:** 
```bash
git config --global core.quotepath false
```

### Q: 如何检测文件的实际编码？
**A:** 
```powershell
# PowerShell
$bytes = [System.IO.File]::ReadAllBytes("file.txt")
[System.Text.Encoding]::UTF8.GetString($bytes)

# 或使用工具
chcp 65001
file -i filename  # Linux/Mac/WSL
```

### Q: 团队成员使用不同操作系统如何统一编码？
**A:** 
- 使用 `.editorconfig` 文件（跨编辑器、跨平台）
- 配置 `.gitattributes` 统一换行符处理
- 在README中明确说明编码规范

## 参考资源

- [EditorConfig官方文档](https://editorconfig.org/)
- [VSCode文件编码设置](https://code.visualstudio.com/docs/editor/codebasics#_file-encoding-support)
- [Git国际化配置](https://git-scm.com/book/zh/v2)

---

**最佳实践**：对于新文件，始终使用UTF-8编码；对于老文件，在 `.editorconfig` 中明确标注其编码。

