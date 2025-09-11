const animation_time = 30
const delay = ms => new Promise(res => setTimeout(res, ms));
const final_text = document.getElementById("final-text")

console.log(final_text)

const showtext = async () => {
  await delay(5000);

  final_text.style.display = "block";
  
};

showtext()