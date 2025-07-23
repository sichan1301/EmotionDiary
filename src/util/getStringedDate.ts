  export const getStringedDate = (createdDate:Date) => {
    const year = createdDate.getFullYear();
    const month = createdDate.getMonth() + 1;
    const date = createdDate.getDate();

    const stringedMonth = month < 10 ? `0${month}` : `${month}`;
    const stringedDate = date < 10 ? `0${date}` : `${date}`;

    return `${year}-${stringedMonth}-${stringedDate}`;
  };
