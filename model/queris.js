const queries = {
    TodosLosArticulos:
        `SELECT e.title, e.image, e.date, e.extract, a.email
            FROM entries AS e
            INNER JOIN authors AS a
            ON e.email = a.email
            WHERE a.email = $1
            ORDER BY e.title
            LIMIT $2
            OFFSET $3`,
    getTodosArticles:
        `SELECT title, image, date, content, extract, email
            FROM entries 
            ORDER BY title
            LIMIT $1
            OFFSET $2`,
    UnArticulo: `SELECT e.title, e.image, e.extract, e.date, TO_CHAR(e.date, 'DD/MM/YYYY') AS formatDate, e.content, e.category, a.email
            FROM entries AS e
            INNER JOIN authors AS a
            ON e.email = a.email
            WHERE e.title = $1 and e.email = $2`,
    crearArticle: `INSERT INTO entries(title,content,extract, image, email, category)
            VALUES 
            ($1, $2, $3, $4, $5, $6)`,
    actualizarArtiuclo: `UPDATE entries
            SET title=$1, content=$2, extract=$3, image=$4, email=$5, category=$6
            WHERE title=$7 AND email=$5`,
    eliminarArticulo: `DELETE 
           FROM entries 
           WHERE title=$1 AND email=$2`,
    buscarArticulos: `SELECT title, image, date, extract, email
            FROM entries
            WHERE  title LIKE $1 OR content LIKE $1
            LIMIT $2
            OFFSET $3`,
}
