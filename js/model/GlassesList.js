export class GlassesList {
  arrGlasses = [];

  renderClass(id) {
    console.log(id);
  }
  renderProduct(selector) {
    let contentHTML = "";
    for (const glass of this.arrGlasses) {
      contentHTML += `
        <div class="col-4">
                  <button class="btn" onclick = "renderGlass('${glass.id}')">
                    <img src="${glass.src}" alt="" style="width: 100%" />
                  </button>
                </div>
        `;
    }
    document.querySelector(selector).innerHTML = contentHTML;
  }
}
