const queries = process.argv.filter((_, index) => {
  return index > 1;
});

const result = {
  items: [],
};

for (let query of queries) {
  const chunkedQuery = query.match(/.{1,4}/g).join('-')
  const item = {
    uid: 'desktop',
    type: 'file',
    title: chunkedQuery,
    subtitle: '',
    arg: chunkedQuery,
    autocomplete: query,
    icon: {
      type: 'fileicon',
      path: '/Applications/Alfred\ 5.app',
    },
  };
  result.items.push(item);
}

console.log(JSON.stringify(result));
