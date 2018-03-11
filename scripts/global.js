
// function addLoadEvent(func) { // 为load事件添加响应函数
//     var curonload = window.onload; // 保存当前的load事件响应函数
//     if(typeof curonload != 'function') { // 如果当前的load事件响应函数的类型不是function的话，即没有绑定任何load事件响应函数的话，
//         window.onload = func; // 则将func帮定为load事件的响应函数。
//     } else { //否则,
//         window.onload = function() { // 为load事件绑定新的响应函数，其定义如下：
//             curonload(); //当前的load事件响应函数
//             func(); // 新添加的load事件响应函数
//         }
//     }
// }

// function insertAfter(new Element, targetElement) { // 在目标元素(targetElement)之后插入新元素(newElement)
//     var parent = targetElement.parentNode; // 获得目标元素的父节点
//     if(parent.lastchild == targetElement){ // 如果目标元素是父节点的最后一个子节点的话，
//         parent.appendChild(targetElement); // 直接调用内置的appendChild()函数，将新元素追加到最后。
//     } else { // 否则
//         parent.insertBefore(newElement, targetElement.nextSibling); // 调用内置的insertBefore()函数，将新元素插入到目标元素的下一个兄弟节点之前
//     }
// }

// function addClass(element, value) { // 为元素(element)添加新类(value)
//     if(!element.className) { // 如果元素的类属性值为空字符串的话，则
//         element.className = value; // 将元素的类属性设置为value
//     } else { // 否则
//         newClassName = element.className; // 使用newClassName保存className属性当前的值
//         newClassName += " "; // 因为向元素添加不同的类需要用空格隔开，所以使用字符串加法添加一个空格
//         newClassName += value; // 将新类名添加到newClassName中
//         element.className = newClassName; // 将元素的类名属性设置为newClassName
//     }
// }

// function hilightPage() { // 高亮当前页的导航
//     if(!document.getElementsByTagName) return false;
//     if(!document.getElementById) return false;
//     var headers = document.getElementsByTagName('header'); // 获得header元素
//     if(0 == headers.length) return false;
//     var navs = headers[0].getElementsByTagName('nav'); // 获得nav元素
//     if(0 == navs.length) return false;
//     var links = navs[0].getElementsByTagName('a'); // 获得包含a元素的数组
//     var linkurl; // 定义变量linkurl用于存储完整的超链接
//     for(var i = 0; i < links.length; ++i) { // 遍历导航栏的所有链接
//         linkurl = links[i].getAttribute('href'); // 获得第i个a元素的href值
//         if(window.location.href.indexOf(linkurl) != -1) { // 如果当前地址中包含linkurl，则
//             links[i].className = 'here'; // 将导航栏中第i个a元素的类属性设置为here
//             link[i].parentNode.className = "lhere";
//             var linktext = links[i].lastChild.nodeValue.toLowerCase(); // 获得a元素的文本子节点(即导航栏上显示的文本)的小写形式
//             document.body.setAttribute('id', linktext); // 将当前网页的id属性设置为linktext
//             break; // 不用再处理后面的a元素
//         }
//     }
// }

// function moveElement(elementID, final_x, final_y, interval) { // 在浏览器内容窗口中移动id为elementID的元素到位置final_x和final_y，刷新间隔为interval
//     if(!document.getElementById) return false;
//     if(!document.getElementById(elementID)) return false;
//     var elem = document.getElementById(elementID); // 获得需要移动的元素
//     if(elem.movement) { // 如果元素elem有属性movement，则
//         clearTimeout(elem.movement); // 取消数字movement代表的由setTimeout()方法产生的延时调用
//     }
//     // 如果该元素没有默认初始位置，则设置该元素的初始位置为相对于父元素的左上角
//     if(!elem.style.left) {
//         elem.style.left = '0px';
//     }
//     if(!elem.style.top) {
//         elem.style.top = '0px';
//     }
//     // 获得元素的初始位置
//     var xpos = parseInt(elem.style.left);
//     var ypos = parseInt(elem.style.top);
//     // 如果到达目标位置则返回true
//     if(xpos == final_x && ypos == final_y) {
//         return true;
//     }
//     // 移动x和y,每次移动的距离为当前位置到目标位置的十分之一
//     if(xpos < final_x) { // 移动x
//         var dist = Math.ceil((final_x - xpos) / 10);
//         xpos += dist;
//     } else {
//         var dist = Math.ceil((xpos - final_x) / 10);
//         xpos -= dist;
//     }
//     if(ypos < final_y) { // 移动y
//         var dist = Math.ceil((final_y - ypos) / 10);
//         xpos += dist;
//     } else {
//         var dist = Math.ceil((ypos - final_y) / 10);
//         ypos -= dist;
//     }
//     // 需要为left和top属性加上单位px(像素)
//     elem.style.left = xpos + 'px';
//     elem.style.top = ypos + 'px';
//     // 以interval为间隔延时调用函数moveElement()
//     var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
//     elem.movement = setTimeout(repeat,interval); // 保存代表该延时调用的数字
// }

// function prepareSlideshow() { // 滑动显示动画的准备函数
//     if(!document.getElementsByTagName) return false;
//     if(!document.getElementById) return false;
//     if(!document.getElementById('intro')) return false;
//     var intro = document.getElementById('intro');
//     // 创建滑动区域，并设置id为slideshow
//     var slideshow = document.createElement('div');
//     slideshow.setAttribute('id', 'slideshow');
//     // 创建一个图片元素用于显示边框
//     var frame = document.createElement('img');
//     frame.setAttribute('src', 'images/frame.gif');
//     frame.setAttribute('alt', '');
//     frame.setAttribute('id', 'frame');
//     slideshow.appendChild(frame); // 将frame追加为slideshow的子节点
//     // 创建图片元素并设置属性
//     var preview = document.createElement('img');
//     preview.setAttribute('src', 'images/slideshow.gif');
//     preview.setAttribute('alt', 'a glimpse of what awaits you');
//     preview.setAttribute('id', 'preview');
//     slideshow.appendChild(preview); // 将preview追加为slideshow的子节点
//     insertAfter(slideshow, intro); // 将slideshow插入到元素intro后面

//     var links = document.getElementsByTagName('a'); // 获得所有的链接
//     var destination; // 定义变量destination以保存目标url
//     for(var i = 0; i < links.length; ++i) { // 遍历为个链接
//         links[i].onmouseover = function() { // 为每个链接添加mouseover事件的响应函数
//             destination = this.getAttribute('href'); // 将destination设置为鼠标当前悬停的链接
//             // 移动图片
//             if(destination.indexOf('index.html') != -1) {
//                 moveElement('preview', 0, 0, 5);
//             } else if(destination.indexOf('about.html') != -1) {
//                 moveElement('preview', -150, 0, 5);
//             } else if(destination.indexOf('photos.html') != -1) {
//                 moveElement('preview', -300, 0, 5);
//             } else if(destination.indexOf('live.html') != -1) {
//                 moveElement('preview', -450, 0, 5);
//             } else if(destination.indexOf('contact.html') != -1) {
//                 moveElement('preview', -600, 0, 5);
//             }
//         }
//     }
// }

// function showSection(id) { // 显示某部分内容
//     var sections = document.getElementsByTagName('section'); // 获得所有的section元素
//     for(var i = 0; i < sections.length; ++i) { // 遍历所有的section
//         if(sections[i].getAttribute('id') != id) { // 如果不是当前的section则
//             sections[i].style.display = 'none'; // 不显示
//         } else { // 否则
//             sections[i].style.display = 'block'; // 显示
//         }
//     }
// }

// function prepareInternalnav() { // 准备内部导航
//     if(!document.getElementsByTagName) return false;
//     if(!document.getElementById) return false;
//     var articles = document.getElementsByTagName('article'); // 获得所有的article元素
//     if(0 == articles.length) return false; // 如果没有article元素则返回false
//     var navs = articles[0].getElementsByTagName('nav'); // 获得article内部所有的的nav元素
//     if(0 == navs.length) return false; // 如果没有nav元素则返回false
//     var nav = navs[0]; // 取第一个nav元素
//     var links = nav.getElementsByTagName('a'); // 获得navs[0]中所有的a元素
//     for(var i = 0; i < links.length; ++i) { // 遍历每个链接
//         var sectionId = links[i].getAttribute('href').split('#')[1]; // 将链接中的#号去掉，以获得网页内部锚的地址(获取每个section的id)
//         if(!document.getElementById(sectionId)) continue; // 如果不存在id为sectionID的section元素，则跳过本次循环
//         document.getElementById(sectionId).style.display = 'none'; // 将所有的section都设置为不显示
//         links[i].destination = sectionId; // 为每个链接(a元素)添加一个名为destination的新属性用于储存目标section的id
//         links[i].onclick = function() { // 为页内导航的click事件添加事件响应函数
//             showSection(this.destination); // 显示链接i对应的section
//             return false; // 返回false防止页面跳转
//         }
//     }
// }

// function showPic(whichpic) { // 显示图片
//     var source = whichpic.getAttribute('href'); // 获得当前图片代表的链接(该链接指向当前图片放大后的图片)
//     var placeholder = document.getElementById('placeholder');
//     placeholder.setAttribute('src', source); // 将placeholder的图片设置为当前图片放大后的图片
//     var text = ''; // 创建描述文本并设置为空字符串
//     if(whichpic.getAttribute('title')) { // 获得title属性
//         text = whichpic.getAttribute('title');
//     }
//     var description = document.getElementById('description'); // 获得id为description的p元素
//     if(3 == description.firstChild.nodeType) { // 如果第一个子节点为文本节点的话，则
//         description.firstChild.nodeValue = text; // 将文本节点的值设置为text
//     }
// }

// function preparePlaceholder() { // 准备图片显示区域
//     if(!document.getElementById) return false;
//     if(!document.createElement) return false;
//     if(!document.createTextNode) return false;
//     if(!document.getElementById('imagegallery')) return false; // 如果没有id为imagegallery的元素则返回false
//     // 创建一个img元素
//     var placeholder = document.createElement('img');
//     placeholder.setAttribute('id', 'placeholder');
//     placeholder.setAttribute('src', 'images/placeholder.gif');
//     placeholder.setAttribute('alt', 'my image gallery');
//     // 创建一个p元素用于描述图片
//     var description = document.createElement('p');
//     description.setAttribute('id', 'description');
//     // 为p元素创建文本子节点
//     var desctext = document.createTextNode('Choose an image');
//     description.appendChild(desctext);
//     var gallery = document.getElementById('imagegallery'); // 获得id为imagegallery的元素
//     insertAfter(description, gallery); // 将descrip插入到gallery后面
//     insertAfter(placeholder, description); // 将placeholder插入到description后面
// }

// function prepareGallery() { // 准备gallery
//     if(!document.getElementsByTagName) return false;
//     if(!document.getElementById) return false;
//     if(!document.getElementById('imagegallery')) return false;
//     var gallery = document.getElementById('imagegallery'); // 获得id为imagegallery的元素
//     var links = gallery.getElementsByTagName('a'); // 获得所有的链接
//     for(var i = 0; i < links.length; ++i) { // 遍历每个链接
//         links[i].onclick = function() { // 为每个链接的click事件绑定响应函数
//             showPic(this); // 在placeholder中显示图片
//             return false; // 返回false防止页面跳转
//         }
//     }
// }

// function stripeTables() { // 使表格产生间隔效果
//     if(!document.getElementsByTagName) return false;
//     var tables = document.getElementsByTagName('table'); // 获得所有的table元素
//     for(var i = 0; i < tables.length; ++i) { // 遍历每个table
//         var rows = tables[i].getElementsByTagName('tr'); // 获得第i个table的所有行(tr)
//         for(var j = 0; j < rows.length; ++j) { // 遍历每行(tr)
//             if(1 == j % 2) { // 如果行数为奇数，则
//                 addClass(rows[j], 'odd'); // 为该行的类属性添加odd类
//             }
//         }
//     }
// }

// function highlightRows() { // 高亮表格当前鼠标悬停的行
//     if(!document.getElementsByTagName) return false;
//     var rows = document.getElementsByTagName('tr'); // 获得网页中的所有tr元素
//     for(var i = 0; i < rows.length; ++i) { // 遍历所有tr元素
//         rows[i].oldClassName = rows[i].className; // 为tr元素添加新的属性以保存当前的className
//         rows[i].onmouseover = function() { // 为tr元素的mouseover事件添加响应函数
//             addClass(this, 'highlight'); // 为该行添加类highlight
//         }
//         rows[i].onmouseout = function() { // 为tr元素的mouseout事件添加响应函数
//             this.className = this.oldClassName; // 将className属性设置为高亮之前的值oldClassName
//         }
//     }
// }

// function displayAbbreviations() { // 显示缩写
//     if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
//     var abbreviations = document.getElementsByTagName('abbr'); // 获得所有的abbr元素
//     if(abbreviations.length < 1) return false; // 如果没有abbr元素则返回false
//     var defs = new Array(); // 创建一个[key,definitin]键值数组(字典)
//     for(var i = 0; i < abbreviations.length; ++i) { // 遍历所有的abbr元素
//         var current_abbr = abbreviations[i]; // 获得当前abbr元素
//         if(current_abbr.childNodes.length < 1) continue; // 如果当前abbr元素没有子元素(通常指没有含缩写文本的文本子节点)，则返回false
//         var definition = current_abbr.getAttribute('title'); // 将当前abbr元素的title值赋给变量definition
//         var key = current_abbr.lastChild.nodeValue; // 获得缩写文本(通常abbr元素只有一个文本子节点)
//         defs[key] = definition; // 存储键值对
//     }
//     var dlist = document.createElement('dl'); // 创建元素dl(description list)
//     for(key in defs) { // 遍历[key,definition]键值对数组
//         var definition = defs[key]; // 将缩写key对应的全称赋给definition
//         var dtitle = document.createElement('dt'); // 创建元素dt(description title)
//         var dtitle_text = document.createTextNode(key); //创建内容为缩写文本key的文本节点
//         dtitle.appendChild(dtitle_text); // 将文本节点dtitle_text追加为dtitle元素的子节点
//         var ddesc = document.createElement('dd'); // 创建元素dd(description description)
//         var ddesc_text = document.createTextNode(definition); // 创建内容为全称definition的文本节点
//         ddesc.appendChild(ddesc_text); // 将文本节点ddesc_text追加为ddesc的子节点
//         dlist.appendChild(dtitle); // 将描述标题元素dtitle追加为描述列表元素dlist的子节点
//         dlist.appendChild(ddesc); // 将描述定义元素ddesc追加为描述列表元素dlist的子节点
//     }
//     if(dlist.childNodes.length < 1) return false; // 如果描述列表为空，则返回false
//     var header = document.createElement('h3'); // 为描述列表创建一个标题元素h3
//     var header_text = document.createTextNode('Abbreviations'); // 创建文本节点
//     header.appendChild(header_text); // 将文本节点header_text追加为3级标题节点header的子元素
//     var articles = document.getElementsByTagName('article'); // 获得所有的article元素
//     if(0 == articles.length) return false; // 如果没有article元素，则返回false
//     var container = articles[0]; // 获得第一个article元素
//     // 将header和dlist追加为articles[0]的子节点
//     container.appendChild(header);
//     container.appendChild(dlist);
// }

// function focusLabels() {
//     if(!document.getElementsByTagName) return false;
//     var labels = document.getElementsByTagName('label'); // 获得所有标签
//     for(var i = 0; i < labels.length; ++i) {
//         labels[i].onclick = function() { // 为点击标签事件绑定响应函数
//             var id = this.getAttribute('for'); // 获得标签的for属性
//             if(!document.getElementById(id)) return false; // 如果标签没有绑定任何表单，则返回false，否则
//             var element = document.getElementById(id); // 取得该表单对象
//             element.focus(); // 是标签对应的表单获得焦点
//         }
//     }
// }

// function resetFields(whichForm) { // 表单验证: 获得和失去焦点的处理函数、设置表单占位符
//     if(Modernizr.input.placeholder) return; // 如果input表单支持placeholder属性，则返回
//     for(var i = 0; i < whichForm.elments.length; ++i) { // 遍历所有表单元素
//         var element = whichForm.elments[i]; // 获得第i个表单元素
//         if(element.type == 'submit') continue; // 如果是提交按钮则跳过
//         var check = element.placeholder || element.getAttribute('placeholder'); // 获得placeholder属性的值(占位符)
//         if(!check) continue; // 如果placeholder属性值为空(无占位符)，则跳过
//         element.onfocus = function() { // 为获得焦点事件添加响应函数
//             var text = this.placeholder || this.getAttribute('placeholder'); // 获得placeholder属性的值(占位符)
//             if(this.value == text) { // 如果当前表单内容为placeholder属性的值(表明之前用户未输入任何内容)，则
//                 this.className = ''; // 将类名设为空
//                 this.value = ''; // 将表单内容设为空
//             }
//         }
//         element.onblur = function() { // 为失去焦点添加响应函数
//             if(this.value == '') { // 如果当前表单内容为空，则
//                 this.className = 'placeholder'; // 将表单的类名设置为placeholder(占位符)
//                 this.value = this.placeholder || this.getAttribute('placeholder'); // 将表单内容设置为placeholder属性的值(占位符)
//             }
//         }
//         element.onblur(); // 为每个表单元素执行一次onblur方法
//     }
// }

// function prepareForms() { // 准备表单
//     for(var i = 0; i < document.forms.length; ++i) { // 遍历每一个表单元素
//         var thisform = document.forms[i];
//         //resetFields(thisform); // 调用上面的resetFields，HTML5不需要调用此函数
//         thisform.onsubmit = function() { // 为onsubmit事件添加响应函数
//             //if(!validateForm(this)) return false; // HTML5不需要调用此函数
//             var article = document.getElementsByTagName('article')[0]; // 获得article元素
//             if(submitFormWithAjax(this, article)) return false; // 提交成功返回false防止页面跳转，
//             return true; // 否则跳转页面
//         }
//     }
// }

// function isFilled(field) { // HTML5不需要此函数
//     if(field.value.replace(' ','').length == 0) return false; // 如果去掉所有空格后，内容长度为0则返回false
//     var placeholder = field.palceholder || field.getAttribute('placeholder'); // 获得placeholder属性值
//     return (field.value != placeholder); // 如果表已被修改则返回true，否则返回false
// }

// function isEmail(field) { // HTML5不需要此函数
//     return (field.value.indexOf('@') != -1 && field.value.indexOf('.') != 1); // 如果串中有@和.符号则返回true,否则返回false(简单但不完全可靠的验证方式)
// }

// function validateForm(whichform) { // HTML5不需要此函数
//     for(var i = 0; i < whichform.elements.length; ++i) {
//         var element = whichform.elements[i];
//         if(element.required == 'required') {
//             if(!isFilled(element)) { // 如果必填表单未填写，则提示用户填写
//                 alert('Please fill in the ' + element.name + ' field');
//                 return false;
//             }
//         }
//         if(element.type == 'email') {
//             if(!isEmail(element)) { // 如果表单为email，如果格式是不正确，则提示用户修改
//                 alert('The ' + element.name + ' field must be a valid email address');
//                 return false;
//             }
//         }
//     }
//     return true; // 所有表单内容都符合要求，则返回true
// }

// function getHTTPObject() { // HTML5不需要此函数
//     if(typeof XMLHttpRequest == 'undefined') {
//         try {
//             return new ActiveXObject('Msxml2.XMLHTTP.6.0');
//         }
//         catch(e) {}

//         try {
//             return new ActiveXObject('Msxml2.XMLHTTP.3.0');
//         }
//         catch(e) {}

//         try {
//             return new ActiveXObject('Msxml2.XMLHTTP');
//         }
//         catch(e) {}

//         return false;
//     }
//     return new XMLHttpRequest();
// }

// function displayAjaxLoading(element) { // 显示加载动画
//     while(element.hasChildNodes()) {
//         element.removeChild(element.lastChild);
//     }
//     var content = document.createElement('img');
//     content.setAttribute('src', 'images/loading.gif');
//     content.setAttribute('alt', 'Loading...');
//     element.appendChild(content);
// }

// function submitFormWithAjax(whichform, thetarget) { // 使用Ajax提交表单
//     //var request = getHTTPObject();
//     // IE9以后的IE浏览器和其它如chrome、firefox等浏览器都已经内置了XMLHttpRequest对象，直接new XMLHttpRequest()就可以返回一个XMLHttpRequest对象，而不需要自己写函数
//     //if(!request) { return false; }
//     var request = new XMLHttpRequest(); // 获得xmlhttp对象实例
//     displayAjaxLoading(thetarget); 

//     // 对表单元素进行编码
//     var dataParts = [];
//     var element;
//     for(var i = 0; i < whichform.elements.length; ++i) { // 遍历所有表单
//         element = whichform.elements[i]; // 获得第i个表单
//         dataParts[i] = element.name + '=' + encodeURIComponent(element.value); // 提取表单数据
//     }
//     var data = dataParts.join('&'); // 将表单数据用符号&连接起来

//     request.open('POST', whichform.getAttribute('action'), true ); // 以POST方式异步发送数据
//     request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // 设置请求头
//     request.onreadystatechange = function() { // 状态改变事件的响应函数
//         if(request.readyState == 4) { // 如果响应已完成，则
//             if(request.status == 200 || request.status == 0) { // 如果请求成功或请求未初始化：
//                 var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/); // 使用正则表达式捕获以<article>开头，以</article>结尾的字符串
//                 if(matches.length > 0) { // 如果捕获的内容长度大于0，则
//                     thetarget.innerHTML = matches[1]; // 将thetarget的内容设置为捕获组1的内容
//                 } else { // 否则，
//                     thetarget.innerHTML = '<p>Oops, there was an error. Sorry.</p>'; // 显示错误信息
//                 }
//             } else { // 否则，显示当前请求的状态信息
//             thetarget.innerHTML = '<p>' + request.statusText + '</p>'; 
//             } 
//         }
//     };
//     request.send(data); // 发送数据
//     return true; // 返回true
// }

// addLoadEvent(prepareForms);
// addLoadEvent(focusLabels);
// addLoadEvent(prepareGallery);
// addLoadEvent(preparePlaceholder);
// addLoadEvent(hilightPage);
// addLoadEvent(prepareSlideshow);
// addLoadEvent(prepareInternalnav);
// addLoadEvent(stripeTables);
// addLoadEvent(highlightRows);
// addLoadEvent(displayAbbreviations);
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}

function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName+= " ";
    newClassName+= value;
    element.className = newClassName;
  }
}

function highlightPage() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("navigation")) return false;
  var nav = document.getElementById("navigation");
  var links = nav.getElementsByTagName("a");
  for (var i=0; i<links.length; i++) {
    var linkurl = links[i].getAttribute("href");
    var currenturl = window.location.href;
    if (currenturl.indexOf(linkurl) != -1) {
      links[i].className = "here";
      var linktext = links[i].lastChild.nodeValue.toLowerCase();
      document.body.setAttribute("id",linktext);
    }
  }
}

addLoadEvent(highlightPage);