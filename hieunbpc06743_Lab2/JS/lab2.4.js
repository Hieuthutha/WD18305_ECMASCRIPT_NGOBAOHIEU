function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Sử dụng spread operator để kết hợp các phần tử
    return sentence;
  }
  
  console.log(spreadOut());
  