import Image from "next/image";
import Link from "next/link";

export default async function RecipeInfoBox(props) {
    return (
        <div className="me-3 mt-3">
        <Link className="text-decoration-none">
          <div className="card" style={{ width: "18rem" }}>
            <Image
              width={250}
              height={250}
              src={props.image}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text overflow-y-auto" style={{"height": "150px"}}>
                {props.ingredients}
                {props.equipment}
                {props.instructions}
              </p>
            </div>
          </div>
        </Link>
      </div>
      )
}
