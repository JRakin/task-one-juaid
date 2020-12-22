var fetchBtn = document.getElementById("fetch");

if (fetchBtn) {
  fetchBtn.addEventListener("click", function () {
    var inputValue = document.getElementById("userId").value;

    var repoData = []

    if (inputValue) {
      fetch(`https://api.github.com/users/${inputValue}/repos`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
          repoData = data;
        });
    }

    if(repoData) {

    }
  });
}
