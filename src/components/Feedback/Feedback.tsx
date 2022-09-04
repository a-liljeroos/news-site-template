import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";
const Feedback = () => {
  window.scrollTo(0, 0);
  return (
    <div className="card-container">
      <div className="card-icon-top">
        <MdConnectWithoutContact color="#dc0000" size={50} />
      </div>
      <h3 className="card-headline lift-title">Palaute</h3>

      <form className="card-form">
        <label className="card-form-label">* Palautteen syy</label>
        <select name="" id="">
          <option value="">Juttupalaute</option>
          <option value="">Palautetta toimitukseen</option>
          <option value="">Palautetta tekniikasta</option>
          <option value="">Palautetta mainoksista</option>
        </select>
        <label className="card-form-label">* Palaute</label>
        <textarea />
        <h4 className="card-subheadline">Yhteystiedot</h4>
        <p>
          Täytähän yhteystiedot, jos haluat, että vastaamme viestiisi.
          Käsittelemme yhteystiedot luottamuksellisesti.
        </p>
        <div className="input-group1">
          <label className="card-form-label"> Nimi</label>
          <br />
          <input type="text" />
        </div>
        <div className="input-group1">
          <label className="card-form-label"> Sähköposti</label>
          <br />
          <input type="email" />
        </div>
        <div className="input-group1">
          <label className="card-form-label">Puhelinnumero</label>
          <br />
          <input type="number" />
        </div>
        <div className="input-group1">
          <label className="card-form-label">
            Asiaan liittyvät kuvat tai videot: (Liitteiden yhteiskoko max. 50
            MB)
          </label>
          <br />
          <div className="file-upload-container">
            <label className="file-upload-label">
              <input type="file" />
              Lataa liite
            </label>
          </div>
        </div>
        <div className="button-group">
          <button>PERUUTA</button>
          <button className="btn-red">LÄHETÄ</button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
