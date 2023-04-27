import React, { useState } from 'react';

function EditIcon() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
   

    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 500);
  }

  return (
    <div className={clicked ? 'icon clicked' : 'icon'} onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M21.657 2.343c-1.172-1.171-3.071-1.171-4.243 0l-13 13c-.132.132-.238.28-.316.439l-3 8c-.103.275.015.576.268.729.117.088.254.132.393.132.111 0 .223-.027.327-.082l8-3c.159-.078.307-.184.439-.316l13-13c1.171-1.172 1.171-3.072 0-4.243zm-17.414 18.414l-2.586-2.586 1.293-3.439 2.586 2.586-1.293 3.439zm13.251-13.25l-8 8c-.096.096-.203.167-.316.208l-3.279 1.23 1.23-3.279c.04-.113.112-.22.208-.316l8-8c.293-.293.768-.293 1.061 0 .293.293.293.768 0 1.061z"/></svg>
    </div>
  );
}

export default EditIcon;
