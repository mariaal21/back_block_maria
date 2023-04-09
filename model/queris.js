const queries = {
    TodosLosArticulos:
      `SELECT e.title, e.image, a.email
       FROM articles AS e
       INNER JOIN autores AS a
       ON e.email = a.email
       WHERE a.email = $1
       ORDER BY e.title
       LIMIT $2
       OFFSET $3`,
    getTodosArticles:
      `SELECT title, image, content, email
       FROM articles 
       ORDER BY title
       LIMIT $1
       OFFSET $2`,
    UnArticulo: 
      `SELECT e.title, e.image, e.content, a.email
       FROM articles AS e
       INNER JOIN autores AS a
       ON e.email = a.email
       WHERE e.title = $1 and e.email = $2`,
    crearArticle:
      `INSERT INTO articles (title,content, image, email)
       VALUES 
       ($1, $2, $3, $4)`,
    actualizarArticulo: 
      `UPDATE articles
       SET title=$1, content=$2, image=$3, email=$4
       WHERE title=$5 AND email=$4`,
    eliminarArticulo:
      `DELETE FROM articles 
       WHERE title=$1 AND email=$2`,
    buscarArticulos: 
      `SELECT title, image, email
       FROM articles
       WHERE title LIKE $1 
       LIMIT $2
       OFFSET $3`,
  }
  