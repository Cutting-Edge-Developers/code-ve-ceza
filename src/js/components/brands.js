function brands() {
    const items = [
        {
            "image" : "src/static/brands/1.svg",
            "alt": "1"
        },
        {
            "image" : "src/static/brands/2.svg",
            "alt": "2"
        },
        {
            "image" : "src/static/brands/3.svg",
            "alt": "3"
        },
        {
            "image" : "src/static/brands/4.svg",
            "alt": "4"
        },
        {
            "image" : "src/static/brands/5.svg",
            "alt": "5"
        },
        {
            "image" : "src/static/brands/6.svg",
            "alt": "6"
        },
    ];
    function autoplayFunc(ms){
        let j = 0;
        if(items.length - item_per_page <= actives){
            while(j < items.length){
                brandList.children[j].style = 'width: '+brandLeft+'%; margin-left: '+(j*brandLeft )+'%;';
                j++;
            }
            actives = 0;
        }else{
            while(j < items.length){
                let marginlleft = parseFloat(brandList.children[j].style.marginLeft.split("px")[0]) - brandLeft;
                brandList.children[j].style = 'width: '+brandLeft+'%; margin-left: '+marginlleft+'%;';
                j++;
            }
            actives++;
        }
    }
    class Brand{
        constructor(element, options){
            if(options["type"] == "brand"){
                window.brandList = document.querySelector(element);
                let i = 0;
                window.actives = 0;
                window.brandLeft = 100 / options["item_per_page"];
                window.item_per_page = options["item_per_page"];
                while(i < items.length){
                    let item = document.createElement('div');
                    item.style = 'margin-left: '+(brandLeft*i)+'%; width: '+brandLeft+'%;';
                    item.id = 'item-'+(i+1);
                    item.className = 'brand-item';
                    let image = document.createElement('img');
                    image.src = items[i]["image"];
                    image.alt = items[i]["alt"];
                    brandList.appendChild(item);
                    item.appendChild(image);
                    i++;
                }
                if(options["autoplay"]){
                    window.autoplay_ms = options["autoplay_ms"];
                    setInterval(function(){
                        autoplayFunc(autoplay_ms);
                    },autoplay_ms);
                }
            }
        }
    }
    const brand = new Brand("#brands",{
        autoplay: true,
        autoplay_ms: 1500,
        item_per_page: 4,
        pagination: false,
        type: "brand"
    });
}

export default brands