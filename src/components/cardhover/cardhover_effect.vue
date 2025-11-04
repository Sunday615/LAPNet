<template>
    <div class="flexdisplay">
  <div class="card">
    <div class="card-image">
      <img src="https://picsum.photos/600/400" alt="Sample Image" />
      <div class="overlay"></div>
    </div>
    <div class="card-content">
      <h3>Card Title</h3>
      <p>This is a sample description of the card.</p>
    </div>
  </div>
  
  </div>
</template>

<script setup>
// No script logic needed for this simple hover effect
</script>

<style scoped>
.flexdisplay{
    display: flex;

}
.card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  max-width: 400px;
}

.card:hover {
  transform: translateY(-5px);
}

/* Image container */
.card-image {
  position: relative;
  overflow: hidden;
}

/* The image itself */
.card-image img {
  width: 100%;
  height: auto;
  transition: transform 0.6s ease;
}

/* Zoom image on hover */
.card:hover .card-image img {
  transform: scale(1.1);
}

/* Gradient overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%);
  opacity: 0;
  transition: opacity 0.6s ease;
}

/* Fade gradient in on hover */
.card:hover .overlay {
  opacity: 1;
}

/* Card text */
.card-content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  z-index: 2;
}

.card-content h3 {
  margin: 0;
  font-size: 1.4rem;
}

.card-content p {
  margin: 5px 0 0;
  font-size: 0.9rem;
}
</style>
