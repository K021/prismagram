require('dotenv').config();
import { GraphQLServer } from 'graphql-yoga';

// 설정파일에서 포트 설정을 가져온다. 혹시나를 위해 기본값을 설정해준다. 
// dotenv 가 '.env' 파일을 읽어 환경설정을 해주고, 
// 현재 프로세스의 환경설정에서 포트값을 가져오는 것 같다. 
const PORT = process.env.PORT || 4000;  // '.env'에서 가져온 포트 값. 없으면 4000으로 세팅.

// type definition 과 resolver 을 설정해준다. 
const typeDefs = `
  type Query{
    hello: String!
  }
`;
const resolvers = {
  Query: {
    hello: () => "Hi",
  }
}

// 서버를 만든다
const server = new GraphQLServer({typeDefs, resolvers});

// 서버 시작함수
// port 와 collback function 을 넣는다. 
server.start({ port: PORT }, () => console.log(`Server running on http://localhost:${PORT}`));  // '.env' file 에서 port 를 읽어올 수 있다. 