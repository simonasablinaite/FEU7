function title() {
   const mainTitleWrapper = document.createElement('div');
   mainTitleWrapper.classList.add('main-title');

   const mainTitle = document.createElement('h1');
   mainTitle.textContent = `Find Us`

   mainTitleWrapper.append(mainTitle)

   return mainTitleWrapper;
}

export default title;