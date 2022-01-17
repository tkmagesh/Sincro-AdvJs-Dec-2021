let radio = (function(){
	
	let all_radios = {};

	function radio(evtName){
		all_radios[evtName] = all_radios[evtName] || new Radio(evtName);
		return all_radios[evtName];
	}

	class Radio{

		_evtName = '';
		_subscriptions = [];

		constructor(evtName){
			this._evtName = evtName;
		}

		subscribe(...susbcriptionFns){
			susbcriptionFns
				.forEach(susbcriptionFn => this._subscriptions.push(susbcriptionFn));
			return this;
		}

		broadcast(...data){
			this._subscriptions.forEach(susbcriptionFn => susbcriptionFn(...data));
			return this;
		}

		unsubscribe(...susbcriptionFns){
			susbcriptionFns.forEach(susbcriptionFn => this._subscriptions = this._subscriptions.filter(fn => fn !== susbcriptionFn));
			return this;
		}

	}

	return radio;
})();

//Usage:
//subscriptions
radio('evt-1').subscribe(function(...args){
    console.log('[evt-1](s1) triggered with ', args);
})

radio('evt-1').subscribe(function(...args){
    console.log('[evt-1](s2) triggered with ', args);
})

radio('evt-2').subscribe(function(...args){
    console.log('[evt-2](s1) triggered with ', args);
})

radio('evt-2').subscribe(function(...args){
    console.log('[evt-2](s2) triggered with ', args);
})

//publisher
radio('evt-1').broadcast(10,20,30)