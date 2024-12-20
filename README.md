# 인스타그램 로그인 피싱 웹사이트 (교육용)

이 레포지토리는 교육 목적으로 인스타그램 로그인 페이지를 모방한 피싱 웹사이트의 예시입니다. 이 프로젝트는 보안 교육, 피싱 공격의 위험성을 이해하고 방지하기 위한 용도로만 사용해야 합니다.

## 📋 목차
- [프로젝트 개요](#프로젝트-개요)
- [설치 방법](#설치-방법)
- [사용 방법](#사용-방법)
- [주의사항](#주의사항)
- [라이센스](#라이센스)

## 프로젝트 개요
이 프로젝트는 사용자가 인스타그램 로그인 정보를 입력하도록 유도하는 간단한 웹페이지를 구현한 것입니다. 실제 인스타그램 페이지와 유사한 디자인을 가지고 있으며, 사용자가 입력한 정보를 서버로 전송하여 콘솔에 출력한뒤 json 파일에 정보를 저장합니다.


## 설치 방법
1. 이 레포지토리를 클론합니다:
    ```bash
    git clone https://github.com/hqnseung/instagram-phishing.git
    ```
2. 프로젝트 디렉토리로 이동합니다:
    ```bash
    cd instagram-phishing
    ```
3. 필요한 패키지를 설치합니다:
    ```bash
    npm install
    ```
4. 서버를 실행합니다:
    ```bash
    npm start
    ```

## 사용 방법
1. 웹 브라우저에서 `http://localhost`에 접속합니다.
   - 주소뒤에 리다이렉트 될 인스타그램 주소를 추가하면 로그인 후에 해당 주소로 이동됩니다. 
   - 예) `http://localhost/darkcircle_hanseung/` > `https://www.instagram.com/darkcircle_hanseung/`
3. 인스타그램 로그인 정보를 입력합니다.
4. 로그인 버튼을 클릭하면 입력된 정보가 콘솔에 출력되며 `loginLog.json` 파일에 저장됩니다.

## 주의사항
- 이 웹사이트는 교육 및 연구 목적 외에는 사용하지 마십시오.
- 피싱 공격은 불법이며, 이를 실제로 시행할 경우 법적 책임이 따를 수 있습니다.
- 이 프로젝트를 통해 피싱 공격의 원리와 방지 방법을 배우는 데 중점을 두어야 합니다.

## 라이센스
이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

