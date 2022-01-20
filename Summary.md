
## 새로 알게 된 점 
- file system based routing과 config based routing이 있다.
- 스타일을 추가하기 위해서는 Links를 사용해야한다.
각 route에 스타일을 명시하도록 함으로써 스타일 변경시 다른 route에 영향도를 체크할 필요가 없다. 그리고 자연스럽게 css 가 code-split 형태가 된다. 
- DB에 직접 연결하는 형태도 지원한다. 대신 dev 환경에서는 코드 변경시 rebuild가 일어나고 매번 커넥션이 새로 생성되는 문제가 있어 별도 처리가 필요하다. (db.server.ts)
- remix는 각 route별로 한 파일 내에서 모든 처리를 하는것을 지향한다. remix route는 action을 export할 수 있다.
This enables you to co-locate everything about a data set in a single route module: the data read, the component that renders the data, and the data writes:
비동기 관련 코드를 더이상 추가할 필요는 없다.

## 느낀점
- 정말 생 html 파일을 여는것처럼 빠릿하다..! 사용자 경험 상향평준화를 일으킬거같다. 