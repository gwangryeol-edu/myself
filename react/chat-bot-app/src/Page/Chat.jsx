import { useState } from "react";
import MessageList from "../components/MessageList";
import ChatForm from "../components/ChatForm";

import { ai } from "../utils/geneai";
import { chat } from "../utils/geneai";
import { config } from "../utils/geneai";

export default function Chat() {
  const [prompt, setPrompt] = useState(""); // 사용자 입력 프롬프트 관리 상태
  const [messages, setMessages] = useState([]); // 사용자 -ai 메세지 관리 상태
  const [isLoading, setIsLoading] = useState(false); // ai 요청 후 응답 대기 상태

  // AI 객체 생성
  // const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  async function handleSubmit(event) {
    event.preventDefault();

    // 프롬프트가 비어있거나 ai응답을 대기 중이라면
    // isLoading == true && prompt.trim() === "" 이라면 작업 x
    if (isLoading == true && prompt.trim() === "") return;

    // 대화 내역 상태를 업데이트
    // 사용자의 프롬프트를 대화 내역에 추가(role:"user")
    // role 역할 : user라면 오른쪽에 배치, ai라면 왼쪽에 배치
    setMessages((prev) => [...prev, { role: "user", content: prompt }]);

    const currentPrompt = prompt;
    setPrompt("");

    setIsLoading(true); // 요청 시작
    await generateAiContent(currentPrompt); // ai 응답 생성 함수
    setIsLoading(false); // 요청 종료
  }

  // ai에게 요청을 보내서 응답을 생성하는 함수
  async function generateAiContent(currentPrompt) {
    try {
      // 단순 텍스트 생성
      const response = await chat.sendMessage({
        message: currentPrompt,
        config: config,
      });
      console.log(response.data);

      // 사용자 입력 프롬프트 초기화
      // setPrompt("");

      // message 상태에 ai 응답 저장
      setMessages((prev) => [...prev, { role: "ai", content: response.text }]);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      {/* 사용자 - ai 대화 내용 출력 컴포넌트 */}
      <MessageList messages={messages} />

      {/* 사용자의 프롬프트 작성 폼 컴포넌트 */}
      <ChatForm
        prompt={prompt} // 사용자 입력값 관리 상태
        setPrompt={setPrompt} // 사용자 입력값 상태 변경 함수
        isLoading={isLoading} // ai 응답 대기 상태
        onSubmit={handleSubmit} // form 요소 제출 이벤트 핸들러 함수
      />
    </div>
  );
}
