
## 새로 알게 된 점 
- file system based routing과 config based routing이 있다.
- 스타일을 추가하기 위해서는 Links를 사용해야한다.
각 route에 스타일을 명시하도록 함으로써 스타일 변경시 다른 route에 영향도를 체크할 필요가 없다. 그리고 자연스럽게 css 가 code-split 형태가 된다. 
- DB에 직접 연결하는 형태도 지원한다. 대신 dev 환경에서는 코드 변경시 rebuild가 일어나고 매번 커넥션이 새로 생성되는 문제가 있어 별도 처리가 필요하다. (db.server.ts) 