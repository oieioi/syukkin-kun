syukkin-kun
===========

[MoneyForward クラウド給与](https://payroll.moneyforward.com/) の出勤・退勤をコマンドラインから行う

INSTALLATION
-------

Clone this repo and cd the directory and

    $ docker build -t oieioi/syukkin-kun . --build-arg USER_NAME="your mail address" --build-arg PASSWORD="your password"

USAGE
-----

### 出勤

    $ docker run oieioi/syukkin-kun

### 退勤

    $ docker run oieioi/syukkin-kun true
