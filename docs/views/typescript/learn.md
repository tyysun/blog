---

title: 测试 【Docker】设置国内镜像
date: 2020-07-05
categories:

- Docker

tags:

- Docker

---### 环境

- mac OS 10.15.5

- Docker version v19.03.8

查看 **dacker** 配置文件


```
cat ~/.docker/daemon.json
```

增加 `"registry-mirrors" : ["https://docker.mirrors.ustc.edu.cn"]`

```
{
  "experimental" : false,
  "debug" : true,
  "registry-mirrors" : ["https://docker.mirrors.ustc.edu.cn"]
}
```

<!-- more -->
