const triple_min = (a: number, b: number, c: number) => {
  const temp = a < b ? a : b;
  return temp < c ? temp : c;
};

const edit_distance = (a: string, b: string) => {
  const m = a.length;
  const n = b.length;
  const dp = new Array(m + 1);
  for (let i = 0; i <= m; i += 1) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i <= m; i += 1) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j += 1) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (a[i - 1] !== b[j - 1]) {
        dp[i][j] = triple_min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 1
        );
      } else {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }
  return dp[m][n];
};

const LEN = 1024;

// const BKNode = (word: string) => {
//   this.word = word;
//   this.next = new Array(2 * LEN);
//   for (let i = 0; i < 2 * LEN; i += 1) {
//     this.next[i] = -1;
//   }
// };

class BKNode {
  word: string;
  next: Array<any>;
  constructor(word: string) {
    this.word = word;
    this.next = [];
    for (let i = 0; i < 2 * LEN; i += 1) {
      this.next[i] = -1;
    }
  }
}

// BKNode.prototype.set_word = function (word: string) {
//   this.word = word;
// };

export class BKTree {
  tree: Array<BKNode>;
  rt: BKNode;
  ptr: number;
  constructor(word_num: number) {
    this.tree = new Array(word_num);
    for (let i = 0; i < this.tree.length; i += 1) {
      this.tree[i] = new BKNode("");
    }
    this.rt = new BKNode("");
    this.ptr = 0;
  }
  _add(idx: number, curr: BKNode) {
    if (this.rt.word === "") {
      this.rt.word = curr.word;
      this.tree[0] = this.rt;
      return;
    }
    const dist = edit_distance(this.rt.word, curr.word);

    if (this.tree[idx].next[dist] === -1) {
      this.ptr += 1;
      this.tree[this.ptr].word = curr.word;
      this.tree[idx].next[dist] = this.ptr;
    } else {
      this._add(this.tree[idx].next[dist], curr);
    }
  }
  _simWords(idx: number, word: string, TOL: number) {
    let ret = [];
    if (idx === -1) {
      return ret;
    }

    if (this.rt.word === "") {
      return ret;
    }
    const cur_rt = this.tree[idx];
    const dist = edit_distance(word, cur_rt.word);

    if (dist <= TOL) {
      ret.push(cur_rt.word);
    }
    let start = dist - TOL;
    if (start < 0) {
      start = 1;
    }
    const end = dist + TOL;
    while (start < end) {
      const temp = this._simWords(cur_rt.next[start], word, TOL);
      ret = ret.concat(temp);
      start++;
    }
    return ret;
  }

  add(words: Array<string>) {
    if (!Array.isArray(words)) {
      throw new Error("words is not array");
    }
    words.forEach((element) => {
      this._add(0, new BKNode(element));
    });
  }

  simWords(search: string, TOL: number) {
    return this._simWords(0, search, TOL);
  }
}
