import { Dispatcher } from './dispatcher.js';
import { Store } from './store.js';

const dispatcher = new Dispatcher();

class ScoreStore extends Store {
	constructor(dispatcher) {
		super(dispatcher, 'score', 0);
	}

	processPayload(state, payload) {
		switch (payload.type) {
			case 'bonus':
				return state + 5;
			case 'step':
				return state + 1;
			case 'end':
				return 0;
		}
	}
}

dispatcher.dispatch({ type: 'bonus' });
dispatcher.dispatch({ type: 'step' });
dispatcher.dispatch({ type: 'end' });
dispatcher.dispatch({ type: 'mega-bonus-xxl' });

const scoreElement = document.getElementById('score');

const scoreStore = new ScoreStore(dispatcher);
scoreStore.addListener(score => {
	scoreElement.textContent = `Score: ${score}`;
});

const serverListener = score => {
	// Отправить очки на сервер
};
scoreStore.addListener(serverListener);

scoreStore.removeListener(serverListener);
