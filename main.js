const clock = document.querySelector(".clock");

function getTime() {
  const date = new Date();

  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);

function getQuotes() {
  const quotes = document.querySelector(".quotes");

  let savedQuotes = localStorage.getItem("quotesList");

  if (!savedQuotes) {
    //없으면 기본적으로 하나 생성
    localStorage.setItem("quotesList", JSON.stringify(["Roopretelcham"]));

    savedQuotes = localStorage.getItem("quotesList");
  }

  let parsedQuotes = JSON.parse(savedQuotes);

  quotes.innerText =
    parsedQuotes[Math.floor(Math.random() * parsedQuotes.length)];
}

getQuotes();

function onClickNewQuotes() {
  const quotes = document.querySelector(".quotes");
  const newQuotes = document.querySelector(".new-quotes");
  const newQuotesInput = document.querySelector(".new-quotes-input");

  if (!newQuotesInput.value) return;

  // 로컬 스토리지에 저장
  let savedQuotes = localStorage.getItem("quotesList");
  let parsedQuotes = JSON.parse(savedQuotes);

  parsedQuotes.push(newQuotesInput.value);

  localStorage.setItem("quotesList", JSON.stringify(parsedQuotes));

  // 현재 페이지 반영
  quotes.innerText = newQuotesInput.value;
  newQuotesInput.value = "";

  quotes.style.display = "block";
  newQuotes.style.display = "none";
}

function onClickQuotes() {
  const quotes = document.querySelector(".quotes");
  const newQuotes = document.querySelector(".new-quotes");

  quotes.style.display = "none";
  newQuotes.style.display = "block";
}

async function getNft() {
  const nftImg = document.querySelector(".nft-img");
  const nftName = document.querySelector(".nft-name");
  const nftDesc = document.querySelector(".nft-desc");

  const response = await axios.get(
    "https://olbm.mypinata.cloud/ipfs/QmRgvcTgLjmYg24R1YrYKwzY4k9hVFa6ydbSQcVSphyScN"
  );

  nftImg.src = response.data.image;
  nftName.innerText = response.data.name;
  nftDesc.innerText = response.data.description;
}

getNft();
