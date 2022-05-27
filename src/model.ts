
export interface ModalInputs {
    id:string;
    password:string;
}
/* 요구사항 : 
    제목
    내용 (컨텐츠가 많은 경우 일부만 표현)
    썸네일 이미지(url)
    작성자
    작성날짜
    출처
*/

/* response 
    제목 : title
    내용 : content
    썸네일 이미지 : urlToImage
    작성자 : author
    작성 날짜 : publishedAt
    출처 : source.name
*/ 


export interface LocalStar {
    title:string;
    content:string;
    url:string;
}