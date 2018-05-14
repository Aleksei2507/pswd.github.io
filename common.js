import { Base64 } from 'js-base64'

const getRandom = (charsLength) => Math.floor((Math.random() * charsLength))

const getBase64 = (word) => Base64.encode(word)

const start = (length) => {
	const chars = 'abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ0123456789­';
	let rnd = '';
	for (let i = 0; i < length; i++) {
	  rnd += chars[getRandom(chars.length)]
	}
	return (getBase64(rnd).slice(0, length))
}

const startBtn = document.getElementById('start')
const input = document.querySelector('.length_pswd')

startBtn.addEventListener('click', () => {
	const lengthInput = input.value >= 8 && input.value <= 16 ? input.value : 8
	document.querySelector('.show').innerHTML = start(lengthInput)
})