// Don't even try.
function brainfucker(x, y, z) {
  let [a, b, c, d, e, f, h, j, k, l, m, n, o] = [
    new Uint8Array(30000),
    0,
    0,
    [],
    [],
    0x59,
    0x06,
    0x5b,
    0x3c,
    0x02,
    0x29,
    0x2b,
    0x2c,
  ];
  x = [...x].map((g, i) => {
    g = g.codePointAt(0);
    !((g ^ f) & ~h) && (g == j ? d.push(i) : (e[(e[i] = d.pop())] = i));
    return g;
  });
  while (c < x.length && !isNaN((w = x[c]))) {
    !((w ^ k) & ~l)
      ? w == k
        ? b--
        : b++
      : !((w ^ m) & ~h)
      ? w == n
        ? a[b]++
        : a[b]--
      : !((w ^ f) & ~h)
      ? w == j
        ? !a[b] && (c = e[c])
        : a[b] && (c = e[c])
      : !((w ^ o) & ~l)
      ? w == o
        ? (a[b] = z())
        : y(a[b])
      : c;
    c++;
  }
}
