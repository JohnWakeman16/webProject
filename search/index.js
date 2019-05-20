	function autoComplete(inp, arr) {
	  inp.addEventListener('input', function() {
	  	closeAllLists();
	  	let items = document.createElement('div'),
	  		item = document.createElement('div'),
	  		val = this.value;
	  	if(!val) return;
	  	items.setAttribute('class', 'items');
	  	this.parentNode.appendChild(items);
	  	for(let i = 0; i < arr.length; i ++) {
	  	  if(arr[i].substr(0, val.length).toLowerCase() === val.toLowerCase()) {
	  	  	item.innerHTML = '<b>' + arr[i].substr(0, val.length) + '</b>';
	  	  	item.innerHTML += arr[i].substr(val.length);
	  	  	item.innerHTML += '<input type="hidden" value="' + arr[i] + '"/>';
	  	  	item.addEventListener('click', function() {
	  	  	  inp.value = this.getElementsByTagName('input')[0].value;
	  	  	  closeAllLists();
	  	  	}, false)
	  	  	items.appendChild(item);
	  	  }
	  	}
	  }, false);
	  // 移除所有的标签
	  function closeAllLists() {
	  	let x = document.getElementsByClassName('items'),
	  		len = x.length;
	  	for(let i = 0; i < len; i++) {
	  	  x[i].parentNode.removeChild(x[i]);
	  	}
	  }
	  window.addEventListener('click', closeAllLists, false);
	}
	const x = document.getElementById('serach');
	const arr = ['HTML', 'CSS', 'Javascript'];
	autoComplete(x, arr);