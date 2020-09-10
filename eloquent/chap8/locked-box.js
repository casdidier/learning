const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true; },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!');
    return this._content;
  },
};

function withBoxUnlocked(body) {
  // Your code here.

  // unlock the box
  box.unlock();

  // runs the function body
  try {
    body();
    console.log(box._content);
  } catch (e) {
    console.log(e);
  } finally {
    // ensure the box is locked
    box.lock();
  }
}

withBoxUnlocked(() => {
  box.content.push('gold piece');
});

try {
  withBoxUnlocked(() => {
    throw new Error('Pirates on the horizon! Abort!');
  });
} catch (e) {
  console.log(`Error raised: ${e}`);
}
console.log(box.locked);
// → true
