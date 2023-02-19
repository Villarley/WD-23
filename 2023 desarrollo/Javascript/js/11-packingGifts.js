const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts);
function wrapping(gifts) {
    const copy = gifts.slice();
    return copy.map((gift) => {
      const length = gift.length + 2;
      const wrapper = '*'.repeat(length);
      return `${wrapper}\n*${gift}*\n${wrapper}`;
    });
  }
  
  