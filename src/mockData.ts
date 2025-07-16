export type mockDataType = {
  id: number;
  createdDate: number;
  emotionId: number;
  content: string;
};

export const mockData:mockDataType[] = [
  {
    id:1,
    createdDate:new Date("2025-07-12").getTime(),
    emotionId:1,
    content:"1번째 내용"
  },
  {
    id:2,
    createdDate:new Date("2025-07-14").getTime(),
    emotionId:2,
    content:"2번째 내용" 
  },
  {
    id:3,
    createdDate:new Date("2025-06-14").getTime(),
    emotionId:2,
    content:"3번째 일기 내용" 
  },
]