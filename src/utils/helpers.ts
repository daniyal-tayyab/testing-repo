export const classNames = (...classes : any) => {
    return classes.filter(Boolean).join(' ')
}

export const getLocalStorage = (variableName : string) =>{
  let requiredVar : any = localStorage.getItem(variableName);
  switch (variableName) {
      case 'auth':
        return requiredVar ? JSON.parse(requiredVar) : {user: {} , isLoggedin : false };
      default:
        return {}
    }
}



export const handleDownload = () => {
    const filePath = "/docs/Innovation_Chain_Whitepaper.pdf"; // Relative path to the file

    // Create a link element
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "whitePaper.pdf"; // Specify the downloaded file name
    link.target = "_blank";
    link.rel = "White paper";

    // Dispatch a click event on the link
    link.dispatchEvent(new MouseEvent("click"));
};