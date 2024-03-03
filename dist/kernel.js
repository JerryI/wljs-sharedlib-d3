const loader = async (self) => {
    self["d3"] = await import('./index-7f369fc9.js');
    self["d3-interpolate-path"] = await import('./d3-interpolate-path-3a6490dc.js');
    self["d3-arrow"] = await import('./index-17c3dec3.js');
    console.log('D3 shared library loaded!');
  };

  new interpretate.shared(
    "d3",
    loader
  );
