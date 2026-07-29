# Git 配置及使用指南

## 1. Git 基础配置

### 1.1 全局配置
```bash
# 配置用户名和邮箱（全局）
# 🔧 [可自定义] 替换为您的真实姓名
git config --global user.name "张三"  
# 🔧 [可自定义] 替换为您的真实邮箱
git config --global user.email "zhangsan@example.com"  

# 查看当前配置
git config --list

# 查看特定配置
git config user.name
git config user.email
```

### 1.2 项目级配置
```bash
# 在特定项目中配置（仅对当前仓库有效）
# 🔧 [可自定义] 替换为项目专用的姓名
git config user.name "李四"
# 🔧 [可自定义] 替换为项目或公司邮箱
git config user.email "lisi@company.com"
```

### 1.3 其他重要配置
```bash
# 设置默认编辑器
# 🔧 [可自定义] 选择您喜欢的编辑器
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "vim"         # Vim
git config --global core.editor "nano"        # Nano
git config --global core.editor "subl --wait" # Sublime Text

# 设置换行符处理（Windows/Mac兼容性）
# 🔧 [可自定义] 根据您的操作系统选择
git config --global core.autocrlf input    # Mac/Linux 推荐
git config --global core.autocrlf true     # Windows 推荐

# 设置默认分支名
# 🔧 [可自定义] 可以是 main, master, develop 等
git config --global init.defaultBranch main

# 设置颜色输出
git config --global color.ui auto

# 设置别名（常用命令简化）
# 🔧 [可自定义] 根据个人习惯定义别名
git config --global alias.st status          # 状态查看
git config --global alias.co checkout        # 分支切换
git config --global alias.br branch          # 分支操作
git config --global alias.cm commit          # 提交
git config --global alias.lg "log --oneline --graph --all"  # 图形化日志
# 更多自定义别名示例：
git config --global alias.unstage "reset HEAD --"  # 取消暂存
git config --global alias.last "log -1 HEAD"       # 查看最后一次提交
git config --global alias.visual "!gitk"           # 图形界面
```

## 2. Git 基础操作

### 2.1 仓库初始化
```bash
# 初始化新仓库
# 🔧 [可自定义] 可以指定目录名称
git init
git init my-project  # 在指定目录中初始化

# 克隆远程仓库
# 🔧 [可自定义] 替换为实际的仓库地址
git clone https://github.com/username/repository.git
git clone git@github.com:username/repository.git  # SSH方式
# 🔧 [可自定义] 克隆到指定目录
git clone https://github.com/username/repository.git my-local-name
```

### 2.2 文件操作
```bash
# 查看状态
git status
git status -s  # 简洁模式

# 添加文件到暂存区
git add filename.txt       # 添加特定文件
git add .                  # 添加所有文件
git add *.js              # 添加所有js文件
git add -A                 # 添加所有变更（包括删除）

# 从暂存区移除文件
git reset filename.txt     # 移除特定文件
git reset                  # 移除所有文件

# 提交变更
git commit -m "提交信息"
git commit -am "添加并提交所有变更"  # 跳过暂存直接提交

# 修改最后一次提交
git commit --amend -m "新的提交信息"
```

### 2.3 查看历史
```bash
# 查看提交历史
git log
git log --oneline          # 单行显示
git log --graph            # 图形化显示分支
git log --stat             # 显示文件变更统计
git log -p                 # 显示具体变更内容
git log --since="2023-01-01" --until="2023-12-31"  # 时间范围

# 查看特定文件的历史
git log filename.txt
git log -p filename.txt    # 显示文件的具体变更

# 查看提交差异
git diff                   # 工作区与暂存区差异
git diff --cached          # 暂存区与最新提交差异
git diff HEAD              # 工作区与最新提交差异
git diff commit1 commit2   # 两个提交间差异
```

## 3. 分支管理

### 3.1 分支基础操作
```bash
# 查看分支
git branch                 # 本地分支
git branch -r              # 远程分支
git branch -a              # 所有分支

# 创建分支
# 🔧 [可自定义] 分支名称应该有意义，反映功能或目的
git branch feature-user-login     # 用户登录功能
git branch bugfix-payment-error   # 支付错误修复
git branch hotfix-security-patch  # 安全补丁
git branch release-v1.2.0         # 发布分支

# 分支命名规范建议：
# - feature/功能名称    : 新功能开发
# - bugfix/问题描述     : Bug修复
# - hotfix/紧急修复     : 紧急修复
# - release/版本号      : 发布准备
# - experiment/实验名称 : 实验性功能

git checkout -b feature-shopping-cart  # 创建并切换
git switch -c bugfix-login-timeout     # 新语法：创建并切换

# 切换分支
# 🔧 [可自定义] 切换到任意存在的分支
git checkout main              # 切换到主分支
git checkout feature-payment   # 切换到功能分支
git switch develop            # 新语法：切换到开发分支

# 删除分支
# 🔧 [可自定义] 删除不需要的分支
git branch -d feature-completed    # 安全删除已合并的分支
git branch -D experiment-failed    # 强制删除未合并的分支
```

### 3.2 分支合并
```bash
# 合并分支
git checkout main
git merge feature-branch   # 将feature-branch合并到main

# 变基（rebase）
git checkout feature-branch
git rebase main            # 将feature-branch变基到main

# 交互式变基（整理提交历史）
git rebase -i HEAD~3       # 整理最近3个提交
```

### 3.3 解决冲突
```bash
# 当合并出现冲突时
git status                 # 查看冲突文件
# 手动编辑冲突文件，解决冲突标记
git add resolved-file.txt  # 标记冲突已解决
git commit                 # 完成合并

# 取消合并
git merge --abort

# 取消变基
git rebase --abort
```

## 4. 远程仓库操作

### 4.1 远程仓库管理
```bash
# 查看远程仓库
git remote -v

# 添加远程仓库
# 🔧 [可自定义] origin 是远程仓库的别名，可以自定义为任意名称
git remote add origin https://github.com/username/repo.git
git remote add my-backup https://gitlab.com/username/repo.git     # 备份仓库
git remote add company https://git.company.com/team/project.git    # 公司仓库
git remote add upstream https://github.com/original/repo.git       # 上游仓库（Fork时常用）

# 🔧 [可自定义] 远程仓库别名说明：
# - origin: 默认主仓库（约定俗成）
# - upstream: 上游仓库（Fork项目时的原始仓库）
# - backup: 备份仓库
# - deploy: 部署仓库
# - 可以使用任何有意义的名称

# 修改远程仓库URL
# 🔧 [可自定义] 替换为新的仓库地址
git remote set-url origin https://github.com/username/new-repo.git

# 删除远程仓库
# 🔧 [可自定义] 删除指定别名的远程仓库
git remote remove origin
git remote remove backup  # 删除备份仓库
```

### 4.2 推送和拉取
```bash
# 推送到远程仓库
# 🔧 [可自定义] 远程仓库别名和分支名都可以自定义
git push origin main           # 推送到origin仓库的main分支
git push backup develop       # 推送到backup仓库的develop分支
git push company feature-123  # 推送到company仓库的feature分支
git push -u origin main       # 首次推送并设置上游跟踪
git push                      # 推送到默认上游（已设置跟踪的分支）
git push --all                # 推送所有分支
git push --tags               # 推送标签

# 从远程仓库拉取
# 🔧 [可自定义] 可以从不同的远程仓库拉取
git fetch origin              # 从origin获取远程更新（不合并）
git fetch upstream            # 从上游仓库获取更新
git pull origin main          # 从origin拉取main分支并合并
git pull upstream main        # 从上游仓库拉取并合并
git pull --rebase             # 拉取并变基（保持提交历史整洁）

# 强制推送（慎用）
# ⚠️ 危险操作，会覆盖远程历史
git push --force              # 强制推送
git push --force-with-lease   # 更安全的强制推送（检查远程是否有新提交）
```

## 5. 标签管理

```bash
# 创建标签
# 🔧 [可自定义] 标签名称通常用于版本标记
git tag v1.0.0                    # 轻量标签
git tag v2.1.3                    # 语义化版本号
git tag release-2023-12-01        # 基于日期的标签
git tag milestone-beta            # 里程碑标签

# 🔧 [可自定义] 附注标签可以包含详细信息
git tag -a v1.0.0 -m "版本1.0.0正式发布"
git tag -a v1.1.0 -m "新增用户管理功能\n修复已知Bug\n性能优化"
git tag -a hotfix-1.0.1 -m "紧急修复支付问题"

# 标签命名规范建议：
# - v1.0.0, v1.2.3     : 语义化版本（推荐）
# - release-YYYY-MM-DD : 基于发布日期
# - milestone-名称     : 重要里程碑
# - hotfix-版本号      : 热修复版本

# 查看标签
git tag                           # 列出所有标签
git tag -l "v1.*"                 # 列出v1.x版本标签
git tag -l "release-*"            # 列出发布标签
git show v1.0.0                   # 查看标签详细信息

# 推送标签
# 🔧 [可自定义] 可以推送到不同的远程仓库
git push origin v1.0.0            # 推送特定标签到origin
git push backup v1.0.0            # 推送到备份仓库
git push origin --tags            # 推送所有标签到origin

# 删除标签
# 🔧 [可自定义] 删除指定的标签
git tag -d v1.0.0                 # 删除本地标签
git tag -d release-old            # 删除旧的发布标签
git push origin --delete v1.0.0   # 删除远程标签
```

## 6. 高级操作

### 6.1 储藏（Stash）
```bash
# 储藏当前工作
git stash                  # 储藏工作区变更
git stash -u               # 包含未跟踪文件
git stash save "储藏描述"   # 带描述的储藏

# 管理储藏
git stash list             # 查看储藏列表
git stash show stash@{0}   # 查看储藏内容
git stash apply stash@{0}  # 应用储藏（保留储藏记录）
git stash pop              # 应用并删除最新储藏
git stash drop stash@{0}   # 删除特定储藏
git stash clear            # 清空所有储藏
```

### 6.2 重置和回退
```bash
# 重置（reset）
git reset --soft HEAD~1    # 软重置：仅移动HEAD
git reset --mixed HEAD~1   # 混合重置：重置暂存区（默认）
git reset --hard HEAD~1    # 硬重置：重置工作区和暂存区

# 撤销特定提交
git revert commit-hash     # 创建新提交来撤销指定提交

# 恢复文件
git checkout -- filename.txt     # 恢复工作区文件
git restore filename.txt          # 新语法：恢复工作区文件
git restore --staged filename.txt # 从暂存区恢复到工作区
```

### 6.3 查找和定位
```bash
# 查找提交
git log --grep="关键词"     # 在提交信息中搜索
git log -S "代码片段"       # 在代码变更中搜索
git log --author="作者名"   # 按作者搜索

# 二分查找bug
git bisect start           # 开始二分查找
git bisect bad             # 标记当前版本有问题
git bisect good commit-hash # 标记某版本正常
# Git会自动切换到中间版本，测试后继续标记good/bad
git bisect reset           # 结束查找

# 查看文件每行的作者和提交
git blame filename.txt     # 查看文件注释
git blame -L 10,20 filename.txt  # 查看特定行范围
```

## 7. Git 配置文件详解

### 7.1 配置文件层级

Git 配置采用三级优先级结构，从高到低为：

```bash
# 1. 系统级配置（优先级最低）
# 位置：/etc/gitconfig 或 /usr/local/etc/gitconfig
# 🔧 [可自定义] 影响系统所有用户
git config --system user.name "系统默认用户"
git config --system core.editor "vim"

# 2. 全局级配置（用户级）
# 位置：~/.gitconfig 或 ~/.config/git/config  
# 🔧 [可自定义] 影响当前用户的所有仓库
git config --global user.name "您的全局用户名"
git config --global user.email "global@example.com"
git config --global core.autocrlf input

# 3. 本地级配置（优先级最高）
# 位置：项目根目录/.git/config
# 🔧 [可自定义] 仅影响当前仓库
git config user.name "项目专用用户名"
git config user.email "project@company.com"
```

### 7.2 配置文件结构

**.gitconfig 文件示例：**
```init
# 🔧 [可自定义] 用户基本信息
[user]
    name = 张三
    email = zhangsan@example.com
    # 可选：签名密钥
    signingkey = GPG-KEY-ID

# 🔧 [可自定义] 核心配置
[core]
    # 编辑器选择
    editor = code --wait          # VS Code
    # editor = vim                # Vim  
    # editor = nano               # Nano
    # editor = subl --wait        # Sublime Text
    
    # 换行符处理
    autocrlf = input              # Mac/Linux推荐
    # autocrlf = true             # Windows推荐
    # autocrlf = false            # 不转换
    
    # 文件权限跟踪（仅Unix系统）
    filemode = true
    
    # 忽略文件权限变更
    # filemode = false
    
    # 默认分页器
    pager = less -FRX
    
    # 压缩级别（0-9，9为最高压缩）
    compression = 9
    
    # 文件名大小写敏感
    ignorecase = false
    
    # 符号链接处理
    symlinks = true

# 🔧 [可自定义] 初始化配置
[init]
    # 默认分支名
    defaultBranch = main
    # defaultBranch = master
    # defaultBranch = develop

# 🔧 [可自定义] 颜色配置
[color]
    ui = auto                     # 自动颜色
    # ui = true                   # 总是使用颜色
    # ui = false                  # 从不使用颜色
    
[color "branch"]
    current = yellow reverse      # 当前分支
    local = yellow               # 本地分支
    remote = green               # 远程分支
    
[color "diff"]
    meta = blue bold             # 元信息
    frag = magenta bold          # 文件片段头
    old = red bold               # 删除的行
    new = green bold             # 新增的行
    
[color "status"]
    added = green                # 已添加文件
    changed = yellow             # 已修改文件
    untracked = red              # 未跟踪文件

# 🔧 [可自定义] 推送配置
[push]
    # 推送策略
    default = simple             # 简单模式（推荐）
    # default = current          # 推送当前分支到同名远程分支
    # default = upstream         # 推送到上游分支
    # default = matching         # 推送所有匹配的分支
    
    # 自动设置上游分支
    autoSetupRemote = true
    
    # 推送时同时推送标签
    followTags = true

# 🔧 [可自定义] 拉取配置
[pull]
    # 拉取策略
    rebase = false               # 使用merge（默认）
    # rebase = true              # 使用rebase
    # rebase = interactive       # 交互式rebase
    
    # 快进模式
    ff = only                    # 仅允许快进合并

# 🔧 [可自定义] 合并配置
[merge]
    # 合并工具
    tool = vimdiff               # Vim差异工具
    # tool = vscode              # VS Code
    # tool = meld                # Meld（Linux）
    # tool = kdiff3              # KDiff3
    
    # 冲突样式
    conflictstyle = diff3        # 显示三方差异
    # conflictstyle = merge      # 标准合并样式
    
    # 自动合并提交
    autocommit = true

# 🔧 [可自定义] 差异工具配置
[diff]
    tool = vimdiff
    # tool = vscode
    # tool = meld
    
# VS Code差异工具配置
[difftool "vscode"]
    cmd = code --wait --diff $LOCAL $REMOTE
    
# 合并工具配置
[mergetool "vscode"]
    cmd = code --wait $MERGED
    trustExitCode = false

# 🔧 [可自定义] 远程仓库配置
[remote "origin"]
    url = https://github.com/username/repository.git
    # url = git@github.com:username/repository.git  # SSH方式
    fetch = +refs/heads/*:refs/remotes/origin/*
    # 推送所有分支
    push = +refs/heads/*:refs/heads/*
    
# 🔧 [可自定义] 多个远程仓库示例
[remote "backup"]
    url = https://gitlab.com/username/repository.git
    fetch = +refs/heads/*:refs/remotes/backup/*
    
[remote "upstream"]
    url = https://github.com/original/repository.git
    fetch = +refs/heads/*:refs/remotes/upstream/*

# 🔧 [可自定义] 分支配置
[branch "main"]
    remote = origin
    merge = refs/heads/main
    # 自动变基
    rebase = true
    
[branch "develop"]
    remote = origin
    merge = refs/heads/develop

# 🔧 [可自定义] 命令别名
[alias]
    # 基础别名
    st = status
    co = checkout
    br = branch
    cm = commit
    ps = push
    pl = pull
    
    # 高级别名
    lg = log --oneline --graph --all --decorate
    lol = log --graph --pretty=format:'%C(yellow)%h%Creset -%C(red)%d%Creset %s %C(green)(%cr) %C(blue)<%an>%Creset' --abbrev-commit --all
    ll = log --pretty=format:'%C(yellow)%h%C(red)%d\\ %Creset%s%C(blue)\\ [%cn]' --decorate --numstat
    
    # 操作别名
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = !gitk
    undo = reset --soft HEAD~1
    
    # 清理别名
    cleanup = "!git branch --merged | grep -v '\*\|main\|master\|develop' | xargs -n 1 git branch -d"
    
    # 工作流别名
    save = !git add -A && git commit -m 'SAVEPOINT'
    wip = commit -am "WIP"
    undo-commit = reset --soft HEAD~1
    
    # 高级查找
    find = "!git ls-files | xargs grep -l"
    grep-all = "!git rev-list --all | xargs git grep"
    
    # 统计别名
    count = shortlog -sn
    who = shortlog -s --
    
    # 🔧 [可自定义] 根据个人习惯添加更多别名
    # 例如：
    # backup = !git push backup $(git rev-parse --abbrev-ref HEAD)
    # deploy = !git push deploy main
    # sync = !git pull upstream main && git push origin main

# 🔧 [可自定义] URL重写（简化仓库地址）
[url "git@github.com:"]
    insteadOf = https://github.com/
    # 将HTTPS地址自动转换为SSH
    
[url "git@gitlab.com:"]
    insteadOf = https://gitlab.com/

# 🔧 [可自定义] 安全配置
[credential]
    # 凭据缓存时间（秒）
    helper = cache --timeout=3600
    # 在macOS上使用钥匙串
    # helper = osxkeychain
    # 在Windows上使用凭据管理器
    # helper = manager

# 🔧 [可自定义] 性能优化
[gc]
    auto = 1                     # 自动垃圾回收
    autopacklimit = 50           # 自动打包限制
    
[pack]
    threads = 0                  # 打包线程数（0=自动）
    windowMemory = 256m          # 打包窗口内存
    
[feature]
    manyFiles = true             # 大型仓库优化
    
# 🔧 [可自定义] 提交签名
[commit]
    # 总是签名提交
    gpgsign = true
    # 提交模板
    template = ~/.gitmessage
    
[tag]
    # 总是签名标签
    gpgsign = true

# 🔧 [可自定义] 子模块配置
[submodule]
    recurse = true               # 递归操作子模块
    
# 🔧 [可自定义] 重写配置
[filter "lfs"]
    clean = git-lfs clean -- %f
    smudge = git-lfs smudge -- %f
    process = git-lfs filter-process
    required = true
```

### 7.3 项目级配置文件

**项目/.git/config 示例：**
```init
[core]
    repositoryformatversion = 0
    filemode = true
    bare = false
    logallrefupdates = true
    ignorecase = true
    precomposeunicode = true
    
# 🔧 [可自定义] 项目特定的远程仓库
[remote "origin"]
    url = git@github.com:company/project.git
    fetch = +refs/heads/*:refs/remotes/origin/*
    
[remote "staging"]
    url = git@staging.company.com:project.git
    fetch = +refs/heads/*:refs/remotes/staging/*
    
[remote "production"]
    url = git@production.company.com:project.git
    fetch = +refs/heads/*:refs/remotes/production/*

# 🔧 [可自定义] 项目特定分支配置
[branch "main"]
    remote = origin
    merge = refs/heads/main
    
[branch "develop"]
    remote = origin
    merge = refs/heads/develop
    
# 🔧 [可自定义] 项目特定用户信息
[user]
    name = 项目专用名称
    email = project@company.com
    
# 🔧 [可自定义] 项目特定钩子
[core]
    hooksPath = .githooks
```

### 7.4 配置文件管理命令

```bash
# 查看所有配置
git config --list
git config -l

# 查看特定级别的配置
git config --system --list      # 系统级
git config --global --list      # 全局级
git config --local --list       # 本地级

# 查看特定配置的值
git config user.name             # 当前生效值
git config --global user.name    # 全局配置值
git config --local user.name     # 本地配置值

# 查看配置来源
git config --show-origin --list  # 显示配置来源文件
git config --show-origin user.name  # 显示特定配置来源

# 编辑配置文件
git config --global --edit       # 编辑全局配置
git config --local --edit        # 编辑本地配置
git config --system --edit       # 编辑系统配置

# 删除配置
git config --global --unset user.name        # 删除全局配置
git config --global --unset-all alias.lg     # 删除所有匹配的配置

# 🔧 [可自定义] 备份和恢复配置
# 备份全局配置
cp ~/.gitconfig ~/.gitconfig.backup

# 恢复配置
cp ~/.gitconfig.backup ~/.gitconfig

# 导出配置到文件
git config --global --list > my-git-config.txt
```

### 7.5 配置模板示例

**开发者模板：**
```bash
# 基础开发者配置
git config --global user.name "🔧您的姓名"
git config --global user.email "🔧您的邮箱"
git config --global init.defaultBranch main
git config --global core.editor "code --wait"
git config --global color.ui auto
git config --global push.autoSetupRemote true

# 常用别名
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.lg "log --oneline --graph --all"
```

**团队协作模板：**
```bash
# 团队协作配置
git config --global pull.rebase false
git config --global push.followTags true
git config --global merge.conflictstyle diff3
git config --global rebase.autoStash true

# 提交规范
git config --global commit.template ~/.gitmessage
```

**企业环境模板：**
```bash
# 企业安全配置
git config --global commit.gpgsign true
git config --global tag.gpgsign true
git config --global credential.helper manager

# 代理配置（如需要）
git config --global http.proxy http://proxy.company.com:8080
git config --global https.proxy https://proxy.company.com:8080
```

## 8. .gitignore 文件配置

创建 `.gitignore` 文件来忽略不需要跟踪的文件：

```gitignore
# 🔧 [可自定义] 编译文件 - 根据编程语言调整
*.o          # C/C++目标文件
*.class      # Java类文件
*.pyc        # Python编译文件
*.exe        # Windows可执行文件
*.dll        # Windows动态链接库
*.so         # Linux动态链接库
*.dylib      # macOS动态链接库

# 🔧 [可自定义] 依赖目录 - 根据项目类型调整
node_modules/     # Node.js依赖
venv/            # Python虚拟环境
env/             # Python环境目录
__pycache__/     # Python缓存
vendor/          # Go/PHP依赖
target/          # Java/Rust编译输出
build/           # 构建输出目录
dist/            # 分发目录
.gradle/         # Gradle缓存
.maven/          # Maven缓存

# 🔧 [可自定义] 配置文件 - 保护敏感信息
.env             # 环境变量文件
.env.local       # 本地环境配置
.env.production  # 生产环境配置
config.local.js  # 本地配置文件
secrets.json     # 密钥文件
*.key            # 私钥文件
*.pem            # 证书文件
database.db      # 本地数据库文件

# 🔧 [可自定义] IDE文件 - 根据使用的IDE调整
.vscode/         # Visual Studio Code
.idea/           # IntelliJ IDEA / WebStorm
*.swp            # Vim交换文件
*.swo            # Vim交换文件
*~               # Emacs备份文件
.project         # Eclipse项目文件
.classpath       # Eclipse类路径
.settings/       # Eclipse设置

# 🔧 [可自定义] 系统文件 - 根据操作系统调整
.DS_Store        # macOS文件系统
.DS_Store?       # macOS文件系统
Thumbs.db        # Windows缩略图
ehthumbs.db      # Windows缩略图
Desktop.ini      # Windows文件夹配置

# 🔧 [可自定义] 日志文件 - 根据应用调整
*.log            # 通用日志文件
logs/            # 日志目录
npm-debug.log*   # npm调试日志
yarn-debug.log*  # Yarn调试日志
yarn-error.log*  # Yarn错误日志
lerna-debug.log* # Lerna调试日志

# 🔧 [可自定义] 临时文件 - 根据需要调整
temp/            # 临时目录
tmp/             # 临时目录
*.tmp            # 临时文件
*.temp           # 临时文件
*.cache          # 缓存文件
.cache/          # 缓存目录

# 🔧 [可自定义] 特定框架/工具文件
# Next.js
.next/
out/

# React
build/

# Vue.js
dist/
.nuxt/

# Angular
.angular/

# Docker
*.dockerfile
docker-compose.override.yml

# 🔧 [可自定义] 项目特定文件
# 根据您的项目需要，添加特定的文件或目录
# 例如：
# uploads/         # 上传文件目录
# storage/         # 存储目录
# coverage/        # 测试覆盖率报告
# docs/build/      # 文档构建输出
```

**常用.gitignore模板获取方式：**
```bash
# 使用gitignore.io生成模板
# 访问 https://gitignore.io 输入您的技术栈

# 或使用命令行工具
curl -s https://www.gitignore.io/api/🔧技术栈名称 >> .gitignore
# 例如：node,react,vscode
```

## 9. Git Flow 工作流

### 8.1 功能开发流程
```bash
# 1. 从主分支创建功能分支
# 🔧 [可自定义] 主分支名称可能是 main, master, develop 等
git checkout main              # 切换到主分支
git pull origin main           # 确保本地主分支是最新的

# 🔧 [可自定义] 功能分支命名应该清晰描述功能
git checkout -b feature/user-authentication    # 用户认证功能
git checkout -b feature/shopping-cart          # 购物车功能
git checkout -b feature/payment-integration    # 支付集成
git checkout -b bugfix/login-validation        # 登录验证修复

# 2. 开发功能，提交变更
git add .                      # 添加所有变更
git add src/auth/             # 只添加特定目录
# 🔧 [可自定义] 提交信息应该清晰描述变更内容
git commit -m "feat: 添加用户认证功能"
git commit -m "fix: 修复登录表单验证问题"
git commit -m "docs: 更新API文档"

# 3. 推送功能分支
# 🔧 [可自定义] 可以推送到不同的远程仓库
git push -u origin feature/user-authentication  # 推送到主仓库
git push -u fork feature/user-authentication    # 推送到个人fork

# 4. 创建Pull Request/Merge Request
# 🔧 [可自定义] 在相应的代码托管平台操作：
# - GitHub: 创建 Pull Request
# - GitLab: 创建 Merge Request  
# - Bitbucket: 创建 Pull Request
# - Azure DevOps: 创建 Pull Request

# 5. 合并后清理
git checkout main                              # 回到主分支
git pull origin main                           # 拉取最新变更
git branch -d feature/user-authentication      # 删除本地功能分支
git push origin --delete feature/user-authentication  # 删除远程分支（可选）
```

### 8.2 热修复流程
```bash
# 1. 从生产分支创建热修复分支
# 🔧 [可自定义] 热修复通常从生产分支创建
git checkout main                              # 或 master, production 等
git pull origin main                           # 确保是最新版本

# 🔧 [可自定义] 热修复分支命名应该描述问题
git checkout -b hotfix/critical-security-fix   # 关键安全修复
git checkout -b hotfix/payment-gateway-error   # 支付网关错误
git checkout -b hotfix/database-connection     # 数据库连接问题
git checkout -b hotfix/v1.2.1                 # 基于版本号的热修复

# 2. 修复bug并提交
git add .                                      # 添加修复的文件
# 🔧 [可自定义] 提交信息应该清楚描述修复内容
git commit -m "fix: 修复关键安全漏洞CVE-2023-1234"
git commit -m "fix: 解决支付网关超时问题"
git commit -m "fix: 修复数据库连接池泄漏"

# 3. 推送并快速合并
# 🔧 [可自定义] 可以推送到不同环境的仓库
git push -u origin hotfix/critical-security-fix # 推送到主仓库
git push -u staging hotfix/payment-fix          # 推送到测试环境

# 🔧 [可自定义] 热修复通常需要合并到多个分支
# 合并到生产分支
git checkout main
git merge hotfix/critical-security-fix
git push origin main

# 同时合并到开发分支（如果存在）
git checkout develop
git merge hotfix/critical-security-fix
git push origin develop

# 创建紧急发布标签
git tag -a v1.2.1 -m "紧急修复版本v1.2.1"
git push origin v1.2.1
```

## 10. 提交信息规范

### 9.1 约定式提交格式
```
<类型>[可选的作用域]: <描述>

[可选的正文]

[可选的脚注]
```

### 9.2 常用类型
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档变更
- `style`: 代码格式（不影响功能）
- `refactor`: 重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具变更

### 9.3 示例
```bash
git commit -m "feat(auth): 添加用户登录功能"
git commit -m "fix: 修复用户无法注销的问题"
git commit -m "docs: 更新API文档"
git commit -m "refactor(utils): 优化日期处理函数"
```

## 11. 常用技巧和最佳实践

### 10.1 日常技巧
```bash
# 快速查看最近的提交
git log -5 --oneline

# 查看两个分支的差异
git diff main..feature-branch

# 查看未暂存的变更
git diff

# 查看已暂存的变更
git diff --cached

# 交互式添加文件部分
git add -p

# 快速创建并切换分支
git checkout -b new-feature

# 切换到上一个分支
git checkout -

# 删除已合并的本地分支
git branch --merged | grep -v "\*\|main\|develop" | xargs -n 1 git branch -d
```

### 10.2 最佳实践

1. **经常提交，小步快跑**
   - 每个提交只包含一个逻辑变更
   - 提交信息要清晰描述变更内容

2. **使用分支进行功能开发**
   - 为每个新功能创建独立分支
   - 分支名要有意义：`feature/user-auth`、`bugfix/login-error`

3. **定期同步远程仓库**
   ```bash
   git fetch origin
   git rebase origin/main  # 或 git merge origin/main
   ```

4. **合并前先测试**
   - 确保代码通过所有测试
   - 进行代码审查

5. **保持提交历史整洁**
   - 使用 `git rebase -i` 整理提交历史
   - 避免不必要的合并提交

### 10.3 故障排除

```bash
# 撤销最后一次提交（保留变更）
git reset --soft HEAD~1

# 修改最后一次提交信息
git commit --amend -m "新的提交信息"

# 找回"丢失"的提交
git reflog                 # 查看引用日志
git checkout commit-hash   # 恢复到特定提交

# 清理未跟踪的文件
git clean -f               # 删除未跟踪的文件
git clean -fd              # 删除未跟踪的文件和目录
git clean -n               # 预览要删除的内容
```

## 12. SSH 密钥配置

### 11.1 生成SSH密钥
```bash
# 生成新的SSH密钥
# 🔧 [可自定义] 替换为您的真实邮箱地址
ssh-keygen -t ed25519 -C "zhangsan@example.com"
# 或使用RSA（如果不支持ed25519）
ssh-keygen -t rsa -b 4096 -C "zhangsan@example.com"

# 🔧 [可自定义] 可以指定不同的密钥文件名
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_github -C "github@example.com"
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_work -C "work@company.com"

# 启动ssh-agent
eval "$(ssh-agent -s)"

# 添加密钥到ssh-agent
# 🔧 [可自定义] 根据实际的密钥文件名修改
ssh-add ~/.ssh/id_ed25519          # 默认密钥
ssh-add ~/.ssh/id_ed25519_github   # GitHub专用密钥
ssh-add ~/.ssh/id_ed25519_work     # 工作专用密钥
```

### 11.2 配置多个SSH密钥
创建 `~/.ssh/config` 文件：
```
# 🔧 [可自定义] GitHub配置
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github
  # 可选配置：
  # Port 22
  # PreferredAuthentications publickey

# 🔧 [可自定义] GitLab配置  
Host gitlab.com
  HostName gitlab.com
  User git
  IdentityFile ~/.ssh/id_ed25519_gitlab

# 🔧 [可自定义] 公司私有GitLab配置
Host gitlab.company.com
  HostName gitlab.company.com
  User git
  IdentityFile ~/.ssh/id_ed25519_company
  Port 22

# 🔧 [可自定义] 自定义别名配置（方便记忆）
Host my-github
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_personal

Host work-gitlab
  HostName gitlab.company.com
  User git
  IdentityFile ~/.ssh/id_ed25519_work
  Port 2222

# 🔧 [可自定义] Bitbucket配置
Host bitbucket.org
  HostName bitbucket.org
  User git
  IdentityFile ~/.ssh/id_ed25519_bitbucket

# 🔧 [可自定义] Azure DevOps配置
Host ssh.dev.azure.com
  HostName ssh.dev.azure.com
  User git
  IdentityFile ~/.ssh/id_ed25519_azure
```

**使用示例：**
```bash
# 使用默认配置
git clone git@github.com:username/repo.git

# 使用自定义别名
git clone git@my-github:username/repo.git
git clone git@work-gitlab:company/project.git
```

## 13. 自定义配置总结 🔧

### 13.1 必须自定义的内容
这些内容必须根据您的实际情况修改：

- **个人信息**：
  - `user.name`: 您的真实姓名
  - `user.email`: 您的邮箱地址
  - SSH密钥邮箱：生成密钥时的邮箱

- **仓库地址**：
  - 远程仓库URL：`https://github.com/您的用户名/仓库名.git`
  - SSH地址：`git@github.com:您的用户名/仓库名.git`

### 13.2 可以自定义的内容
这些内容可以根据偏好和团队规范调整：

- **远程仓库别名**：
  - `origin`: 默认主仓库（约定俗成）
  - `upstream`: 上游仓库（Fork时的原始仓库）
  - `backup`: 备份仓库
  - `deploy`: 部署仓库
  - 任何有意义的名称：`company`, `personal`, `mirror` 等

- **分支命名**：
  - 主分支：`main`, `master`, `develop`
  - 功能分支：`feature/功能名`, `feat/功能名`
  - 修复分支：`bugfix/问题描述`, `fix/问题描述`
  - 热修复：`hotfix/紧急修复`, `urgent/问题描述`

- **标签命名**：
  - 语义化版本：`v1.0.0`, `v2.1.3`
  - 日期版本：`release-2023-12-01`
  - 里程碑：`milestone-beta`, `alpha-1.0`

- **命令别名**：
  ```bash
  git config --global alias.st status
  git config --global alias.co checkout  
  git config --global alias.br branch
  git config --global alias.cm commit
  git config --global alias.ps push
  git config --global alias.pl pull
  ```

### 13.3 环境相关配置
根据您的开发环境选择：

- **编辑器**：
  - VS Code: `"code --wait"`
  - Vim: `"vim"`
  - Nano: `"nano"`
  - Sublime: `"subl --wait"`

- **操作系统**：
  - Mac/Linux: `core.autocrlf input`
  - Windows: `core.autocrlf true`

### 13.4 快速开始模板

对于新用户，可以复制以下命令并修改标记的内容：

```bash
# 基础配置（必须修改）
git config --global user.name "🔧您的姓名"  
git config --global user.email "🔧您的邮箱@example.com"

# 常用配置（可选）
git config --global core.editor "code --wait"
git config --global init.defaultBranch main
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit

# 初始化项目
git init 🔧您的项目名
# 或克隆现有仓库
git clone 🔧您的仓库地址

# 添加远程仓库
git remote add origin 🔧您的仓库地址
```

---

## 🎉 使用指南总结

这份指南涵盖了Git的核心功能和日常使用场景。建议：

1. **新手入门**：从基础配置开始，按顺序学习基础操作
2. **实践中学习**：在实际项目中多加练习，加深理解
3. **标记说明**：所有 🔧 [可自定义] 标记的内容都可以根据您的需要修改
4. **参考手册**：遇到问题时，可以快速查阅相关章节

**特别提醒**：
- `origin`不是固定名称，可以修改为任何有意义的名称
- 所有仓库地址、分支名、标签名都可以自定义
- 配置信息（用户名、邮箱、编辑器）必须根据您的实际情况修改
