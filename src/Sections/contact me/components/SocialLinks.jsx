import React from 'react'

export default function SocialLinks() {
    return (
        <div>
            <div className="social">
      <a
        href="https://www.linkedin.com/in/rupin-v-980b63118/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Linkedin profile"
      >
        {' '}
        <i className="fab fa-linkedin" />
      </a>
      <a
        id="profile-link"
        href="https://github.com/RupinVijan"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100011423601329"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Facebook Profile"
      >
        {' '}
        <i className="fab fa-facebook" />
      </a>
    </div>
        </div>
    )
}
