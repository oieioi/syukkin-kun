syukkin-kun
===========

moneyforward クラウド給与の出勤・退勤をコマンドラインから行う

INSTALL
-------

- clone this repo and cd the directory
- `docker build -t oieioi/syukkin-kun . --build-arg USER_NAME="your mail address" --build-arg PASSWORD="your password"`

USAGE
-----

### 出勤

    $ docker run oieioi/syukkin-kun

### 退勤

    $ docker run oieioi/syukkin-kun true
